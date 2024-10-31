import React, { useState, useEffect } from 'react'
import { useGame } from '../GameContext'
import Modal from '../components/Modal'

const Shop = () => {
  const { buyItem, selectItem, purchasedItems, selectedItem } = useGame();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingPurchase, setPendingPurchase] = useState(null);
  const [message, setMessage] = useState({ text: '', isError: false });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message.text) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setMessage({ text: '', isError: false });
        }, 300); // Задержка для завершения анимации
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleBuyOrSelect = (id, cost, profit, image) => {
    if (purchasedItems[id]) {
      selectItem(id);
    } else {
      setPendingPurchase({ id, cost, profit, image });
      setIsModalOpen(true);
    }
  };

  const handleConfirmPurchase = () => {
    const success = buyItem(
      pendingPurchase.id,
      pendingPurchase.cost,
      pendingPurchase.profit,
      pendingPurchase.image
    );
    
    if (success) {
      setMessage({ text: 'Successfully purchased!', isError: false });
    } else {
      setMessage({ text: 'Not enough balance!', isError: true });
    }
    
    setIsModalOpen(false);
    setPendingPurchase(null);
  };

  const items = [
    { id: 1, cost: 10, profit: 15, image: "../../public/asic1.png" },
    { id: 2, cost: 20, profit: 14, image: "../../public/pc8-Photoroom.png" },
    { id: 3, cost: 30, profit: 17, image: "../../public/pc7-Photoroom.png" },
    { id: 4, cost: 300, profit: 18, image: "../../public/pc5-Photoroom.png" },
  ];

  return (
    <div className='pt-4 pb-[100px] bg-[#272727] w-full min-h-screen relative'>
      {message.text && (
        <div className={`absolute top-4 left-0 right-0 mx-auto w-max ${message.isError ? 'bg-red-500' : 'bg-green-500'}  text-white px-4 py-2 roundedtransition-all duration-300 ease-in-out${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'}`}>
          {message.text}
        </div>
      )}

      <div className='flex items-center justify-center mt-10'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
      </div>

      <p className='flex flex-col justify-between items-center mt-8 m-auto font-Dm font-bold text-white text-xl w-[80%]'>Buy equipment for <span>cryptocurrency mining</span></p>
      <p className='flex items-center justify-center mt-12 m-auto font-Dm font-bold text-white text-3xl'>Tier C</p>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmPurchase}
        itemCost={pendingPurchase?.cost}
      />
      
      <div className='grid grid-cols-2 gap-2 px-2 mt-4'>
        {items.map((item) => (
          <div key={item.id} className='flex flex-col justify-between items-center rounded-md p-2 bg-gray-500/20'>
            <img className='w-full h-24 object-contain mb-1' src={item.image} alt="" />
            <p className='text-[10px] text-center text-gray-400 mb-1'>PC production level dash C</p>
            <p className='text-[10px] text-center text-gray-500 mb-1'>Profit per hour: {item.profit}</p>
            <button 
              className={`w-full py-1 px-2 rounded-full text-white text-[10px] ${
                purchasedItems[item.id] 
                  ? (selectedItem === item.id ? 'bg-green-600' : 'bg-blue-600')
                  : 'bg-[#696f72]'
              }`}
              onClick={() => handleBuyOrSelect(item.id, item.cost, item.profit, item.image)}
            >
              {purchasedItems[item.id] 
                ? (selectedItem === item.id ? 'Selected' : 'Select')
                : `Buy ${item.cost}`
              }
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop