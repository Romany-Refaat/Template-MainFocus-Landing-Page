import emailjs from '@emailjs/browser';

const REQUIRED_ENV_VARS = [
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_TEMPLATE_ID',
  'VITE_EMAILJS_PUBLIC_KEY'
] as const;

export const validateEmailJSConfig = () => {
  const missingVars = REQUIRED_ENV_VARS.filter(
    (key) => !import.meta.env[key]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required EmailJS environment variables: ${missingVars.join(', ')}`
    );
  }
};

export const initializeEmailJS = () => {
  validateEmailJSConfig();
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};

export const sendWelcomeEmail = async (userEmail: string) => {
  validateEmailJSConfig();

  const templateParams = {
    to_name: userEmail.split('@')[0],
    to_email: userEmail,
    from_name: 'MainFocus',
    message: 'Thank you for joining MainFocus! We\'re excited to have you as an early adopter.',
    reply_to: 'noreply@mainfocus.com'
  };

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Add public key here for additional security
    );
    
    if (response.status !== 200) {
      throw new Error(`Email service responded with status ${response.status}`);
    }
    
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to send welcome email: ${error.message}`);
    }
    throw new Error('Failed to send welcome email. Please try again later.');
  }
};