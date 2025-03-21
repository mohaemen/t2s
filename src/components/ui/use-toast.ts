export function ToastWrapper({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);

  const toast: ToastFunction = (options) => {
    setToasts((prev) => [...prev, options]);
  };

  return (
    <ToastProvider> {/* Required by Radix UI */}
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
