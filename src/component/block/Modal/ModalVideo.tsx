import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import "../../../App.scss";
import { motion } from 'framer-motion';


interface ModalProps {
  onClose: () => void;
  videoUrl: string;
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow: hidden; 

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
  }
`;

const ModalContent = styled.div`
  width: 70%;
  height: 80%;
  background: #171717;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; 

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    position: relative;
    padding: 0;
  }
`;

const ModalVideo = ({ onClose, videoUrl }: ModalProps) => {

  return (
    <ModalOverlay 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" playing={true} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalVideo;
