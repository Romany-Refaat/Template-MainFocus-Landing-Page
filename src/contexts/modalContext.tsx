// contexts/modalContext.tsx
import React, { createContext, useState, ReactNode, FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalContextType {
  modal: ReactNode;
  setModal: (component: ReactNode) => void;
  isModal: boolean;
  setIsModal: (isOpen: boolean) => void;
  changeModal: (component: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [modal, setModal] = useState<ReactNode>(null);

  const changeModal = (component: ReactNode) => {
    setModal(component);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
    setTimeout(() => setModal(null), 200); // Clear modal after animation
  };

  const value = {
    modal,
    setModal,
    isModal,
    setIsModal,
    changeModal,
    closeModal
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isModal && modal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="bg-background rounded-lg shadow-lgw-full m-4 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {modal}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};