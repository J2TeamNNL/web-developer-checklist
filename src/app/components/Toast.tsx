import { Toast as ToastType } from '../hooks/useToast';
import './Toast.css';

interface ToastProps {
  toasts: ToastType[];
  onClose: (id: number) => void;
}

export function Toast({ toasts, onClose }: ToastProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast--${toast.type}`}>
          <span className="toast-message">{toast.message}</span>
          <button
            className="toast-close"
            onClick={() => onClose(toast.id)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
