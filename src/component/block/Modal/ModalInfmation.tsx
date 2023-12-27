// ModalInformation.tsx
import React from 'react';
import styled from 'styled-components';
import '../../../App.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  artistName: string;
  artistDescription: string;
  artistImg: string;
}

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  
`;

const ModalContent = styled.div`
  width: 70%;
  height: 80%;
  background: #000000; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  color: #fff; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  border: 1px solid #ffffff66;

  h2 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    }

  img {
    width: 100%;
    height: auto;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 3rem ;

  }

  p {
    width: 100%;
    height: 100%;
    font-size: 0.80rem;
    padding: 5px 25px;
    white-space: pre-line;
    text-align: left;
    font-family: 'Pretendard-Medium';

  }
`;

const ModalInformation = ({ isOpen, onClose, artistName, artistDescription, artistImg }: ModalProps) => (
  <ModalWrapper isOpen={isOpen} onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <h2>{artistName}
      <img src={artistImg} alt={artistName} />
      </h2>
      <p>{artistDescription}</p>
    </ModalContent>
  </ModalWrapper>
);

export default ModalInformation;
