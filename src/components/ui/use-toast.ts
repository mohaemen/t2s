"use client"

import { ToastProps, ToastProvider, ToastViewport, ToastTitle, ToastDescription, Toast } from "@radix-ui/react-toast"
import { ReactNode, createContext, useContext, useState } from "react"

type ToastOptions = {
  title?: ReactNode
  description?: ReactNode
  variant?: "default" | "destructive"
  duration?: number
}

type ToastFunction = (options: ToastOptions) => void

const ToastContext = createContext<ToastFunction | null>(null)

export function ToastWrapper({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastOptions[]>([])

  const toast: ToastFunction = (options) => {
    setToasts((prev) => [...prev, options])
  }

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          duration={toast.duration || 5000}
          onOpenChange={() => setToasts(prev => prev.filter((_, i) => i !== index))}
        >
          <ToastTitle>{toast.title}</ToastTitle>
          <ToastDescription>{toast.description}</ToastDescription>
        </Toast>
      ))}
      <ToastViewport className="fixed top-0 right-0 p-6" />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastWrapper")
  }
  return context
}
