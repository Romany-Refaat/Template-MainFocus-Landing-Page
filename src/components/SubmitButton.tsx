import React from 'react';

interface SubmitButtonProps {
  status: 'idle' | 'loading' | 'success' | 'error';
  isEmailServiceReady: boolean;
}

export default function SubmitButton({ status, isEmailServiceReady }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={status === 'loading' || !isEmailServiceReady}
      className="bg-secondary text-primary px-6 py-3 rounded-md text-sm font-semibold 
        hover:bg-secondary/90 active:scale-95 transition-all duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
    >
      {status === 'loading' ? 'Joining...' : 'Join us'}
    </button>
  );
}