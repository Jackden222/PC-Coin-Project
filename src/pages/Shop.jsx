import React, { useState, useEffect } from 'react'
import { useGame } from '../GameContext'
import Modal from '../components/Modal'

const Shop = () => {
  const { buyItem, selectItem, purchasedItems, selectedItem } = useGame();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingPurchase, setPendingPurchase] = useState(null);
  const [message, setMessage] = useState({ text: '', isError: false });
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('computers'); // New state for active category

  // Категории товаров
  const categories = {
    computers: {
      title: ["Regular", "workstations"], // Разделяем на две строки
      items: [
        { id: 1, cost: 10, profit: 15, image: "../../public/asic1.png" },
        { id: 2, cost: 20, profit: 14, image: "../../public/pc8-Photoroom.png" },
        { id: 3, cost: 30, profit: 17, image: "../../public/pc7-Photoroom.png" },
        { id: 4, cost: 300, profit: 18, image: "../../public/pc5-Photoroom.png" },
      ]
    },
    asic: {
      title: ["Professional", "mining stations"], // Разделяем на две строки
      items: [
        { id: 5, cost: 400, profit: 25, image: "../../public/asic1.png" },
        { id: 6, cost: 500, profit: 30, image: "../../public/asic1.png" },
        { id: 7, cost: 600, profit: 35, image: "../../public/asic1.png" },
        { id: 8, cost: 700, profit: 40, image: "../../public/asic1.png" },
      ]
    },
    legacy: {
      title: ["Premium", "professional stations"], // Разделяем на две строки
      items: [
        { id: 9, cost: 1000, profit: 50, image: "../../public/pc5-Photoroom.png" },
        { id: 10, cost: 1200, profit: 60, image: "../../public/pc7-Photoroom.png" },
        { id: 11, cost: 1400, profit: 70, image: "../../public/pc8-Photoroom.png" },
        { id: 12, cost: 1600, profit: 80, image: "../../public/asic1.png" },
      ]
    }
};

  useEffect(() => {
    if (message.text) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setMessage({ text: '', isError: false });
        }, 300);
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

  return (
    <div className='pt-4 pb-[100px] bg-[#272727] w-full min-h-screen relative'>
      {message.text && (
        <div className={`absolute top-4 left-0 right-0 mx-auto w-max ${message.isError ? 'bg-red-500' : 'bg-green-500'}  text-white px-4 py-2 rounded transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'}`}>
          {message.text}
        </div>
      )}

      <div className='flex items-center justify-center mt-10'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
      </div>

      <p className='flex flex-col justify-between items-center mt-8 m-auto font-Dm font-bold text-white text-xl w-[80%]'>Buy equipment for <span>cryptocurrency mining</span></p>

      <div className='flex border-2 rounded-full justify-between border-gray-600 w-[80%] h-16 m-auto mt-8'>
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`transition-all duration-300 ease-in-out justify-between m-auto rounded-full h-14 w-[32%] text-white font-Roboto font-bold text-base
              ${activeCategory === key ? 'bg-gray-600' : 'hover:bg-gray-600/50'}`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <p className='flex flex-col items-center justify-center mt-6 m-auto font-Dm font-bold text-white text-3xl'>
        <span>{categories[activeCategory].title[0]}</span>
        <span>{categories[activeCategory].title[1]}</span>
      </p>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmPurchase}
        itemCost={pendingPurchase?.cost}
      />
      
      <div className='grid grid-cols-2 gap-2 px-2 mt-4'>
        {categories[activeCategory].items.map((item) => (
          <div key={item.id} className='flex flex-col justify-between items-center rounded-md p-2 bg-gray-500/20'>
            <img className='w-full h-24 object-contain mb-1' src={item.image} alt="" />
            <p className='text-[10px] text-center text-gray-400 mb-1'>PC production level {categories[activeCategory].title}</p>
            <p className='text-[10px] text-center text-gray-500 mb-1'>Profit per hour: {item.profit}</p>
            <button 
              className={`w-full py-1 px-2 rounded-full text-white text-[10px] ${
                purchasedItems[item.id] 
                  ? (selectedItem === item.id ? 'bg-green-600' : 'bg-blue-600')
                  :  'bg-orange-600'
              }`}
              onClick={() => handleBuyOrSelect(item.id, item.cost, item.profit, item.image)}
            >
              {purchasedItems[item.id] ? (selectedItem === item.id ? 'Selected' : 'Select') : `Buy for ${item.cost}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;