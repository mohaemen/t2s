"use client";

import {
  Toast as RadixToast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
} from "@radix-ui/react-toast";
import { ReactNode, createContext, useContext, useState } from "react";

type ToastOptions = {
  title?: ReactNode;
  description?: ReactNode;
  variant?: "default" | "destructive";
  duration?: number;
};
type ToastFunction = (options: ToastOptions) => void;

// Create the context with the correct type
const ToastContext = createContext<ToastFunction | null>(null);

export function ToastWrapper({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);

  const toast: ToastFunction = (options) => {
    setToasts((prev) => [...prev, options]);
  };

  return (
    <ToastProvider>
      <ToastContext.Provider value={toast}>
        {children}
        {toasts.map((toast, index) => (
          <RadixToast
            key={index}
            duration={toast.duration || 5000}
            onOpenChange={() => setToasts(prev => prev.filter((_, i) => i !== index))}
          >
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastDescription>{toast.description}</ToastDescription>
          </RadixToast>
        ))}
        <ToastViewport className="fixed top-0 right-0 p-6" />
      </ToastContext.Provider>
    </ToastProvider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastWrapper");
  }
  return context;
}
