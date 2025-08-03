import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

const Toaster = () => {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#302f2c',
          border: '1px solid #3f4816',
          color: '#d9fb06',
        },
        className: 'my-toast',
        descriptionClassName: 'my-toast-description',
      }}
      theme="dark"
    />
  );
};

export default Toaster;