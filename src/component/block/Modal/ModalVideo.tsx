import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

interface ModalProps {
  onClose: () => void;
  videoUrl: string;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 70%;
  height: 80%;
  background: #171717;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Modal = ({ onClose, videoUrl }: ModalProps) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" playing={true} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
