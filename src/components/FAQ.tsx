import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is MainFocus?',
    answer:
      'MainFocus is an app that helps you improve your productivity using Pomodoro timers and AI to track your focus. It awards points for staying focused and lets you compete with friends.',
  },
  {
    question: 'How does MainFocus track my focus?',
    answer:
      "MainFocus uses your device's camera to analyze your focus state with AI. The app ensures privacy by processing all data locally without storing video or personal data.",
  },
  {
    question: 'What makes MainFocus different from other Pomodoro apps?',
    answer:
      'Unlike other apps, MainFocus combines Pomodoro timers with AI-driven focus tracking and gamification. You can earn points, track progress, and even compete with friends to stay motivated.',
  },
  {
    question: 'Can I use MainFocus without the camera feature?',
    answer:
      'Yes, you can use MainFocus with just the Pomodoro timer and tracking features. The camera feature is optional but adds more value for those who want focus tracking.',
  },
  {
    question: 'Is my data safe with MainFocus?',
    answer:
      'Absolutely! MainFocus prioritizes your privacy. All focus analysis happens locally on your device, and no video or personal data is stored or shared.',
  },
  {
    question: 'Can I compete with friends on MainFocus?',
    answer:
      'Yes, MainFocus has a competition feature where you can challenge friends and see who stays focused the longest or earns the most points.',
  },
  {
    question: 'Is MainFocus free to use?',
    answer:
      'MainFocus offers a free version with core features. For advanced features like detailed analytics and premium competition modes, we offer a subscription plan.',
  },
  {
    question: 'What platforms is MainFocus available on?',
    answer:
      'MainFocus is available as a web app and mobile app for iOS and Android. Desktop apps are planned for future releases.',
  },
  {
    question: 'Can MainFocus help me with ADHD or focus challenges?',
    answer:
      "While MainFocus isn't a medical tool, its structured Pomodoro timers and gamified focus tracking can help create a more engaging and supportive environment for maintaining focus.",
  },
  {
    question: 'How can I contact MainFocus support?',
    answer:
      "You can reach our support team via email at support@main-focus.app. We're happy to help with any questions or issues!",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-background font-inter px-6 py-12" id={`faq`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <motion.div 
          className="md:w-1/2 h-fit"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-text mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-text-muted">
            Have another question? Contact me by{" "}
            <a
              className="text-text underline"
              href="mailto:support@main-focus.app"
            >
              Email
            </a>
            .
          </p>
        </motion.div>

        <div className="md:w-2/3 space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className="flex gap-8 justify-between items-center bg-primary p-4 rounded-lg cursor-pointer hover:bg-opacity-90 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h2
                  className={`text-lg font-medium ${
                    openIndex === index ? "text-secondary" : "text-text"
                  }`}
                >
                  {faq.question}
                </h2>
                <motion.div 
                  className="relative flex items-center justify-center w-6 h-6"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <span className="text-text-muted text-2xl">−</span>
                  ) : (
                    <span className="text-secondary text-2xl">+</span>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {openIndex === index && (
                  <div className="bg-primary p-4 mt-2 rounded-lg">
                    <p className="text-text-muted">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;