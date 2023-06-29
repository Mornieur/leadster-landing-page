import React, { MouseEvent, useEffect, useState } from 'react';
import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  maxWidth?: string;
  maxHeight?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth = '',
  maxHeight = '',
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setIsTransitioning(false);
    }
  };

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose && onClose();
    }
  };

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  if (!isOpen && !isTransitioning) {
    return null;
  }

  return (
    <S.ContainerMain>
      <S.Container maxHeight={maxHeight} maxWidth={maxWidth}>
        <div
          className={`modal ${isOpen ? 'open' : ''} ${
            isTransitioning ? 'transitioning' : ''
          }`}
          onTransitionEnd={handleTransitionEnd}
          onClick={handleOverlayClick}
        >
          <div onClick={handleModalClick}>{children}</div>
        </div>
      </S.Container>
    </S.ContainerMain>
  );
};
