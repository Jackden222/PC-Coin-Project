import React, { useState, useEffect } from 'react';
import Gift from '../../../../assets/icons/icon-gift.svg'
import arrow_down from '../../../../assets/icons/chevron-down.svg';
import circle_dollar from '../../../../assets/icons/circle-dollar-sign.svg';

const Modal = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300); // Wait for animation to complete before closing
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 transition-all duration-300">
      <div className={`bg-gradient-to-b from-[#434446] to-[#1D1E1F] rounded-lg shadow-lg p-6 pt-2 max-w-md w-full relative transition-transform duration-300 ease-out ${
        isAnimating ? 'translate-y-[-80px]' : 'translate-y-full'
      }`}>
        <div className="flex justify-center mt-1 mb-8">
          <button className="top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleClose}>
            <img src={arrow_down} alt="" />
          </button>
        </div>
        <img className='flex items-center justify-center ml-[40%] w-[80px] mb-6' src={Gift}/>
        <h2 className="flex justify-center text-lg font-bold text-white mb-6">Subscribe to our community</h2>
        <div className="flex justify-center mt-4">
          <button className='flex items-center bg-[#29B6F6] p-3 pl-6 pr-6 rounded-3xl font-bold text-2xl text-white mb-12'>Subscribe</button>
        </div>
        <div className='flex justify-center'>
          <p className='flex text-white w-[20%] text-[18px] font-bold mb-4'>
            <img className='ml-1' src={circle_dollar} width={30} />+900 
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button 
            className="flex items-center bg-[#29B6F6] p-3 pl-6 pr-6 rounded-3xl font-bold text-2xl text-white mb-2" 
            onClick={handleClose}
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;