import React from 'react'
import { useGame } from '../GameContext'

const Home = () => {
  const { balance, profitPerHour, purchasedItems, selectedItem } = useGame();

  const selectedItemImage = selectedItem ? purchasedItems[selectedItem].image : "../../public/asic2.jpg";

  return (
    <div className='pt-4 bg-[#000000]/80 w-full h-screen'>
      <div className='flex top-0 bg-black/10 mb-1 rounded-2xl px-6 py-4 justify-between items-center'>
        <div className='border-gray-600 border-[1px] rounded-md text-sm text-white'><span className='p-3'>Balance: {balance}</span></div>
        <div className='border-gray-600 border-[1px] rounded-md text-sm text-white'><span className='p-3'>Profit per hour: {profitPerHour}</span></div>
      </div>
      <div className='flex items-center justify-center mt-[30%] '>
        <div className='flex bg-slate-400/30 rounded-full w-80 h-80'>
          <img className='flex justify-between items-center h-[140px] w-[160px] m-auto' src={selectedItemImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home