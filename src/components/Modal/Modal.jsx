import React, { useEffect } from 'react';
import { ImgModal, Overlay } from './Modal.styled';

export default function Modal({ handleModalClose, largeImage }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleModalClose]);

  const handleOverlayClose = event => {
    if (event.target === event.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <Overlay className="overlay" id="overlay" onClick={handleOverlayClose}>
      <ImgModal className="modal">
        <img src={largeImage} alt="" />
      </ImgModal>
    </Overlay>
  );
}
