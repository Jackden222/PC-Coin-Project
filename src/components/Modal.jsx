// frontend/src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm, itemCost }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] flex justify-center items-center'>
      <div className='bg-[#272727] p-4 rounded'>
        <p className='font-Dm font-bold text-white text-lg'>Confirm purchase of {itemCost} $</p>
        <div className='flex justify-between mt-4'>
          <button 
            onClick={onClose}
            className='bg-[#ff0000] hover:bg-[#e60000] text-white font-bold py-2 px-4 rounded'
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className='bg-[#4CAF50] hover:bg-[#3e8e41] text-white font-bold py-2 px-4 rounded'
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;