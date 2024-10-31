import React from 'react'
import { useGame } from '../GameContext'

const Shop = () => {
  const { buyItem, selectItem, purchasedItems, selectedItem } = useGame();

  const handleBuyOrSelect = (id, cost, profit, image) => {
    if (purchasedItems[id]) {
      selectItem(id);
      alert('Item selected!');
    } else {
      const success = buyItem(id, cost, profit, image);
      if (success) {
        alert('Successfully purchased!');
      } else {
        alert('Not enough balance!');
      }
    }
  };

  const items = [
    { id: 1, cost: 10, profit: 15, image: "../../public/asic1.png" },
    { id: 2, cost: 20, profit: 14, image: "../../public/pc8-Photoroom.png" },
    { id: 3, cost: 30, profit: 17, image: "../../public/pc7-Photoroom.png" },
    { id: 4, cost: 40, profit: 18, image: "../../public/pc5-Photoroom.png" },
  ];

  return (
    <div className='pt-4 pb-[100px] bg-[#272727] w-full h-full '>

    <div className='flex items-center justify-center mt-12'>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
      </div>
      
      <p className='flex flex-col justify-between items-center mt-8 m-auto font-Dm font-bold text-white text-xl w-[80%]'>Buy equipment for <span>cryptocurrency mining</span></p>
      <p className='flex items-center justify-center mt-20 m-auto font-Dm font-bold text-white text-3xl'>Tier C</p>
      {/* ... (остальной код остается без изменений) ... */}
      
      <div className='flex flex-wrap justify-center'>
        {items.map((item) => (
          <div key={item.id} className='flex flex-col justify-between items-center rounded-md p-4 bg-gray-500/20 h-[280px] w-[170px] m-4'>
            <img className='flex justify-between items-center h-[140px] w-[160px] m-auto mt-3' src={item.image} alt="" />
            <p className='flex justify-between font-Dm font-bold text-sm text-center text-gray-400 w-[80%]'>PC production level dash C</p>
            <p className='flex justify-between font-Dm text-sm text-center mt-1 text-gray-500'>Profit per hour: {item.profit} </p>
            <button 
              className={`p-2 rounded-3xl pr-4 pl-4 mt-2 text-white ${
                purchasedItems[item.id] 
                  ? (selectedItem === item.id ? 'bg-green-500' : 'bg-blue-500')
                  : 'bg-[#5A6E77]'
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


