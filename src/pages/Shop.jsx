import React, { useState, useEffect } from 'react';
import { useGame } from '../GameContext'
import Modal from '../components/Modal'

const LoadingSpinner = () => (
  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const CartIcon = () => (
  <svg className='ml-1' width="20" height="20" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z" fill="#0098EA"/>
  <path d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5381 22.4861C43.3045 19.4251 41.0761 15.6277 37.5627 15.6277H37.5603ZM26.2548 36.8068L23.6847 31.8327L17.4833 20.7414C17.0742 20.0315 17.5795 19.1218 18.4362 19.1218H26.2524V36.8092L26.2548 36.8068ZM38.5108 20.739L32.3118 31.8351L29.7417 36.8068V19.1194H37.5579C38.4146 19.1194 38.9199 20.0291 38.5108 20.739Z" fill="white"/>
  </svg>
);


 const Dollar = () => (
  <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" color='orange' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
);

const Shop = () => {
  const { buyItem, selectItem, purchasedItems, selectedItem } = useGame();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingPurchase, setPendingPurchase] = useState(null);
  const [message, setMessage] = useState({ text: '', isError: false });
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('computers');
  const [loadingItemId, setLoadingItemId] = useState(null);

  const categories = {
    computers: {
      title: ["Regular", "workstations"],
      items: [
        { id: 1, cost: 100, profit: 15, image: ".../../public/pc8-Photoroom.png", name: "Legacy Ultimate", },
        { id: 2, cost: 120, profit: 14, image: "../../public/pc8-Photoroom.png", name: "Legacy Ultimate", },
        { id: 3, cost: 150, profit: 17, image: "../../public/pc8-Photoroom.png", name: "Legacy Ultimate", },
        { id: 4, cost: 180, profit: 18, image: "../../public/pc8-Photoroom.png", name: "Legacy Ultimate", },
        { id: 5, cost: 10, profit: 15, image: ".../../public/pc8-Photoroom.png", name: "Legacy Ultimate", },
        { id: 6, cost: 20, profit: 14, image: "../../public/pc8-Photoroom.png", name: "Legacy Ultimate", },
        { id: 7, cost: 30, profit: 17, image: "../../public/pc8-Photoroom.png", name: "Legacy Ultimate", },
        { id: 8, cost: 300, profit: 18, image: "../../public/pc8-Photoroom.png", name: "Legacy Ultimate", },
        { id: 9, cost: 30, profit: 17, image: "../../public/pc8-Photoroom.png", name: "Legacy Ultimate", },
        { id: 10, cost: 300, profit: 18, image: "../../public/pc8-Photoroom.png", name: "Legacy Ultimate", },
      ]
    },
    asic: {
      title: ["Professional", "mining stations"],
      items: [
        { id: 11, cost: 400, profit: 25, image: "../../public/asic1.png" ,name: "Legacy Ultimate", },
        { id: 12, cost: 500, profit: 30, image: "../../public/asic1.png", name: "Legacy Ultimate", },
        { id: 13, cost: 600, profit: 35, image: "../../public/asic1.png",name: "Legacy Ultimate", },
        { id: 14, cost: 700, profit: 40, image: "../../public/asic1.png", name: "Legacy Ultimate", },
        { id: 15, cost: 400, profit: 25, image: "../../public/asic1.png" ,name: "Legacy Ultimate", },
        { id: 16, cost: 500, profit: 30, image: "../../public/asic1.png", name: "Legacy Ultimate", },
        { id: 17, cost: 600, profit: 35, image: "../../public/asic1.png",name: "Legacy Ultimate", },
        { id: 18, cost: 700, profit: 40, image: "../../public/asic1.png", name: "Legacy Ultimate", },
        { id: 19, cost: 600, profit: 35, image: "../../public/asic1.png",name: "Legacy Ultimate", },
        { id: 20, cost: 700, profit: 40, image: "../../public/asic1.png", name: "Legacy Ultimate", },
      ]
    },
    legacy: {
      title: ["Premium", "professional stations"],
      items: [
        { id: 21, cost: 2.3, profit: 50, image: "../../public/pc7-Photoroom.png", name: "Legacy Ultimate", },
        { id: 22, cost: 2.5, profit: 60, image: "../../public/pc7-Photoroom.png", name: "Legacy Ultimate", },
        { id: 23, cost: 2.7, profit: 70, image: "../../public/pc7-Photoroom.png", name: "Legacy Ultimate", },
        { id: 24, cost: 2.9, profit: 80, image: "../../public/pc7-Photoroom.png", name: "Legacy Ultimate", },
        { id: 25, cost: 3.1, profit: 70, image: "../../public/pc7-Photoroom.png", name: "Legacy Ultimate", },
        { id: 26, cost: 4.2, profit: 80, image: "../../public/pc7-Photoroom.png", name: "Legacy Ultimate", },
        { id: 27, cost: 5.2, profit: 70, image: "../../public/pc7-Photoroom.png", name: "Legacy Ultimate", },
        { id: 28, cost: 5.5, profit: 80, image: "../../public/pc7-Photoroom.png", name: "Legacy Ultimate", },
        { id: 29, cost: 5.8, profit: 70, image: "../../public/pc7-Photoroom.png", name: "Legacy Ultimate", },
        { id: 30, cost: 6.5, profit: 80, image: "../../public/pc7-Photoroom.png", name: "Legacy Ultimate", },
      ]
    }
  };


  const getButtonBackground = (category, isPurchased, isSelected) => {
    if (category === 'legacy' && !isPurchased) {
      return 'bg-blue-800'; // Красный фон для предметов в категории legacy
    }
    if (isPurchased) {
      return isSelected ? 'bg-green-600' : 'bg-blue-600';
    }
    return 'bg-blue-800';
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
    setLoadingItemId(id);
    
    if (purchasedItems[id]) {
      selectItem(id);
      setTimeout(() => {
        setLoadingItemId(null);
      }, 2000);
    } else {
      setPendingPurchase({ id, cost, profit, image });
      setIsModalOpen(true);
      setTimeout(() => {
        setLoadingItemId(null);
      }, 2000);
    }
  };

  const handleConfirmPurchase = () => {
    setLoadingItemId(pendingPurchase.id);
    setIsModalOpen(false); // Сразу закрываем модальное окно
    
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
    
    setTimeout(() => {
      setLoadingItemId(null);
      setIsModalOpen(false);
      setPendingPurchase(null);
    }, 2000);
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

      <div className='grid grid-cols-2 gap-2 px-2 mt-4'>
        {categories[activeCategory].items.map((item) => (
          <div key={item.id} className='flex flex-col justify-between items-center rounded-md p-2 bg-gray-500/20'>
            <img className='w-full h-24 object-contain mb-1' src={item.image} alt="" />
            <p className='text-sm text-white font-semibold mb-1'>{item.name}</p>
            <p className='text-[12px] text-center text-gray-500 mb-1'>Profit per hour: {item.profit}</p>
            <button 
              className={` py-1 px-2 rounded-full text-white text-sm font-Roboto font-bold ${
                getButtonBackground(activeCategory, purchasedItems[item.id], selectedItem === item.id)
              } flex items-center justify-center`}
              onClick={() => handleBuyOrSelect(item.id, item.cost, item.profit, item.image)}
              disabled={loadingItemId === item.id}
            >
              {loadingItemId === item.id ? (
                <LoadingSpinner />
              ) : (
                <>
                  {purchasedItems[item.id] 
                    ? (selectedItem === item.id ? 'Selected' : 'Select') 
                    : ` ${item.cost}`
                  }
                  {activeCategory === 'legacy' && !purchasedItems[item.id] && <CartIcon />}
                  {activeCategory === 'computers' && !purchasedItems[item.id] && <Dollar />}
                  {activeCategory === 'asic' && !purchasedItems[item.id] && <Dollar />}
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmPurchase}
        itemCost={pendingPurchase?.cost}
      />
    </div>
  );
};

export default Shop;