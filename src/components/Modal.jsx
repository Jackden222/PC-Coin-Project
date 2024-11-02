// frontend/src/components/Modal.jsx
import React from 'react';


const Modal = ({ isOpen, onClose, onConfirm, itemCost }) => {
  if (!isOpen) return null;


   const Dollar = () => (
    <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" color='orange' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
  );

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] flex justify-center items-center'>
      <div className='bg-[#272727] p-4 rounded'>
        <p className='font-Dm font-bold text-white text-lg'>Confirm purchase of {itemCost} <Dollar /></p>
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