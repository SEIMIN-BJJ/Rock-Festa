import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import "../../../App.scss";

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
  z-index: 999;
  overflow: hidden; /* 외부 스크롤을 막기 위해 추가 */

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
  overflow: hidden; /* 내부 스크롤을 막기 위해 추가 */

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    position: relative;
    padding: 0;
  }
`;

const Modal = ({ onClose, videoUrl }: ModalProps) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
    document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" playing={true} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
