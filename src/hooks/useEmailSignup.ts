import { useState, useEffect } from 'react';
import { validateEmailJSConfig, initializeEmailJS } from '../services/emailService';
import { saveEmailSubscriber } from '../services/supabaseService';

interface UseEmailSignupProps {
  initialEmail?: string;
  onEmailChange?: (email: string) => void;
}

interface SubmissionResult {
  success: boolean;
  isExistingSubscriber: boolean;
  error?: string;
}

export const useEmailSignup = ({
  initialEmail = '',
  onEmailChange,
}: UseEmailSignupProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailServiceReady, setIsEmailServiceReady] = useState(false);

  useEffect(() => {
    const initializeService = async () => {
      try {
        await validateEmailJSConfig();
        await initializeEmailJS();
        setIsEmailServiceReady(true);
      } catch (error) {
        console.error('Email service configuration error:', error);
        setIsEmailServiceReady(false);
      }
    };

    initializeService();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<SubmissionResult> => {
    e.preventDefault();

    if (!isEmailServiceReady) {
      setStatus('error');
      setErrorMessage('Email service is not properly configured');
      return { success: false, isExistingSubscriber: false, error: 'Email service not ready' };
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await saveEmailSubscriber(email);
      
      if (result.error) {
        throw new Error(result.error);
      }

      setStatus('success');
      
      // Reset email state on success
      if (onEmailChange) {
        onEmailChange('');
      } else {
        setEmail('');
      }

      return { 
        success: true, 
        isExistingSubscriber: result.isExistingSubscriber || false 
      };
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'An unexpected error occurred';
      setStatus('error');
      setErrorMessage(errorMsg);
      
      return { 
        success: false, 
        isExistingSubscriber: false, 
        error: errorMsg 
      };
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    if (onEmailChange) {
      onEmailChange(newEmail);
    } else {
      setEmail(newEmail);
    }
  };

  return {
    email,
    isFocused,
    status,
    errorMessage,
    isEmailServiceReady,
    handleSubmit,
    handleEmailChange,
    handleFocus: () => setIsFocused(true),
    handleBlur: () => setIsFocused(false),
  };
};