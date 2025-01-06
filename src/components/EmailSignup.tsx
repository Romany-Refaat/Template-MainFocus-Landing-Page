import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface EmailSignupProps {
  className?: string;
}

export default function EmailSignup({ className = '' }: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={`${className} relative`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-12 pr-4 py-3 bg-primary text-text rounded-md border border-secondary focus:border-ring outline-none transition-all duration-200"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-secondary text-primary px-6 py-3 rounded-md text-sm font-semibold hover:bg-secondary/90 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          {status === 'loading' ? 'Joining...' : 'Join us'}
        </button>
      </div>
    </form>
  );
}