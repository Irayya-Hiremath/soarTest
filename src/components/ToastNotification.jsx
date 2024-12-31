import React from 'react';
import toast from 'react-hot-toast';

export const showToast = (message, type = 'success') => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'info':
      toast(message);
      break;
    default:
      toast(message);
  }
};

export const ToastContainer = () => (
  <div>
    <toast.Toaster />
  </div>
);
