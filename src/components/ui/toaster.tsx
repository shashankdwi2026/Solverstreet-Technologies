"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Toast = { id: number; title: string; description?: string; type?: "success" | "error" };
const ToastContext = createContext<{ toast: (toast: Omit<Toast, "id">) => void } | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside Toaster");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const value = useMemo(
    () => ({
      toast: (toast: Omit<Toast, "id">) => {
        const id = Date.now();
        setToasts((current) => [...current, { ...toast, id }]);
        window.setTimeout(() => setToasts((current) => current.filter((item) => item.id !== id)), 4200);
      }
    }),
    []
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-5 right-5 z-50 grid w-[min(380px,calc(100vw-2rem))] gap-3">
        {toasts.map((toast) => {
          const Icon = toast.type === "error" ? XCircle : CheckCircle2;
          return (
            <div key={toast.id} className="glass rounded-lg p-4 shadow-soft">
              <div className="flex gap-3">
                <Icon className={cn("mt-0.5 size-5", toast.type === "error" ? "text-red-500" : "text-teal-500")} />
                <div>
                  <p className="font-semibold">{toast.title}</p>
                  {toast.description ? <p className="mt-1 text-sm text-muted-foreground">{toast.description}</p> : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
