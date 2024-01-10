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
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer; 

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 120vh;
    overflow-x: hidden;
    position: fixed;
    background-color: #000;
    margin-top: -10vh;
  }
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
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
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    position: absolute;
    border: none;
    border-radius: 0;
    margin-top: -5vh;
  }

  &:hover {
    cursor: pointer;
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
      padding: 1rem;
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
    font-size: 0.80rem;
    padding: 5px 25px;
    white-space: pre-line;
    text-align: left;
    font-family: 'Pretendard-Medium';
    overflow-y: auto;

    @media screen and (max-width: 768px) {
      width: 100vw;
      height: 40vh;
      font-size: 1rem;
      padding: 2rem;
      margin-top: -1rem;
      overflow-y: auto;
    }
  }

  &:hover {
    cursor: auto;
  }
`;

const ModalInformation = ({ isOpen, onClose, artistName, artistDescription, artistImg }: ModalProps) => {
  return (
    <ModalWrapper isOpen={isOpen} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={onClose}>
        <h2 onClick={(e) => e.stopPropagation()}>
          {artistName}
          <img src={artistImg} alt={artistName} onClick={(e) => e.stopPropagation()} />
        </h2>
        <p>{artistDescription}</p>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalInformation;
