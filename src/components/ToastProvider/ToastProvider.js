import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const closeToast = (toastId) => {
    // If in a toast array we have a currentToast (determined to be removed)
    // then remove it from toast array using setter function
    const updateDtoasts = toasts.filter((_, index) => index !== toastId);
    setToasts(updateDtoasts);
  };
  return (
    <ToastContext.Provider value={{ toasts, setToasts, closeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
