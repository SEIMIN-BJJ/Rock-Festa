import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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
  background: #ffffff80;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Modal = ({ onClose, videoUrl }: ModalProps) => {
  const renderVideo = () => {
    if (videoUrl) {
      return <div dangerouslySetInnerHTML={{ __html: videoUrl }} />;
    }
    return null;
  };

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        {renderVideo()}
        <button onClick={onClose}></button>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;
