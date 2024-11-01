import React, {useState, useEffect} from 'react'
import { useGame } from '../GameContext'
import { Link, useLocation } from 'react-router-dom';

const Second_Home = () => {

  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch('/api')
  //   .then(response => response.json())
  //   .then(response => setData(response.message))
  // }, [])
  
  const { balance, profitPerHour, purchasedItems, selectedItem } = useGame();

  const selectedItemImage = selectedItem ? purchasedItems[selectedItem].image : "../../public/asic2.jpg";

  const getUrl = useLocation()?.pathname;

  return (
    
    <div className='pt-4 bg-gradient-to-b from-[#434446] to-[#1D1E1F] w-full h-screen'>
      <div className='flex top-0 border-white/40 border-[1px] mb-1 ml-2 mr-2 rounded-2xl px-4 py-4 justify-between items-center'>
        <div className='border-white/40 border-[1px] px-1 py-2 rounded-md text-md font-Roboto text-white'><span className='p-3'>Balance: {balance}</span></div>
        <div className='border-white/40 border-[1px] px-1 py-2 rounded-md text-md font-Roboto text-white'><span className='p-3'>Profit per hour: {profitPerHour}</span></div>
      </div>

        second home page

    </div>
  )
}

export default Second_Home