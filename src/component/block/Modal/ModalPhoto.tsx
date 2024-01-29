import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ModalProps {
  imageUrl: string;
  closeModal: () => void;
  modalOpen: boolean;
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled(motion.div)`
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ModalPhoto = ({ imageUrl, closeModal, modalOpen }: ModalProps) => {
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [modalOpen]);

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <ModalContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}>
        <ModalImage src={imageUrl} alt="Modal" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalPhoto;
