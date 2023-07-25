/* eslint-disable react/prop-types */
//import { useState } from 'react';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <img src={imageUrl} alt="Modal" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;