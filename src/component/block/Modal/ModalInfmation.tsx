// ModalInformation.tsx
import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  artistName: string;
  artistDescription: string;
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
  background: #171717;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  color: #fff;
`;

const ModalInformation = ({ isOpen, onClose, artistName, artistDescription }: ModalProps) => (
  <ModalWrapper isOpen={isOpen} onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <h2>{artistName}</h2>
      <p>{artistDescription}</p>
    </ModalContent>
  </ModalWrapper>
);

export default ModalInformation;
