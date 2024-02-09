import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import '../../../App.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  artistName: string;
  artistDescription: string;
  artistImg: string;
}

const ModalWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 999;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 120vh;
    overflow-x: hidden;
    position: fixed;
    background-color: #000;
    margin-top: -10vh;
  }
`;

const ModalContent = styled(motion.div)`
  width: 70%;
  height: 80%;
  background: #000000;
  position: fixed;
  top: 10%;
  left: 17%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  border: 1px solid #ffffff3d;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    position: absolute;
    border: none;
    border-radius: 0;
    margin-top: -5vh;
    padding: 2rem auto;
    top: 10;
    left: 0;
    transform: translate(-50%, -50%);

  }

  h2 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      width: 100vw;
      height: auto;
      padding: 2rem auto;
    }

    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    height: auto;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 3rem;


    @media screen and (max-width: 768px) {
      width: 100vw;
      height: auto;
      padding: 2rem;
      margin-top: -1rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  p {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    padding: 0px 25px;
    white-space: pre-line;
    text-align: left;
    font-family: 'Pretendard-Medium';
    overflow-y: auto;
    margin-left: 1rem;

    @media screen and (max-width: 768px) {
      width: 100vw;
      height: 60vh;
      font-size: 1.3rem;
      padding: 2rem auto;
      overflow-y: auto;
      margin-left: 0;
    }
  }
`;

const ModalInformation = ({ isOpen, onClose, artistName, artistDescription, artistImg }: ModalProps) => {

  const handleModalContentClick = () => {
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            onClick={() => {
              handleModalContentClick();
              onClose(); 
            }}

          >
            <h2>
              {artistName}
              <img src={artistImg} alt={artistName} />
            </h2>
            <p onClick={onClose}>{artistDescription}</p>
          </ModalContent>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default ModalInformation;
