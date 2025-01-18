import React from 'react';
import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Container onClick={e => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        {children}
      </S.Container>
    </S.Overlay>
  );
} 