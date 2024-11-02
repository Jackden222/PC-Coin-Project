import React, {useState, useEffect} from 'react'
import { useGame } from '../GameContext'
import { Link, useLocation } from 'react-router-dom';

const Home = () => {

  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch('/api')
  //   .then(response => response.json())
  //   .then(response => setData(response.message))
  // }, [])
  
  const { balance, profitPerHour, purchasedItems, selectedItem } = useGame();

  const selectedItemImage = selectedItem ? purchasedItems[selectedItem].image :  null;


  const getUrl = useLocation()?.pathname;

  return (
    
    <div className='pt-4 bg-black w-full h-screen'>
      <div className='flex top-0 mb-1 ml-2 mr-2 rounded-2xl px-4 py-4 justify-between items-center'>
        <div className='border-white/40 border-[1px] px-1 py-2 rounded-md text-md font-Roboto text-white'><span className='p-3'>Balance: {balance}</span></div>
        <div className='border-white/40 border-[1px] px-1 py-2 rounded-md text-md font-Roboto text-white'><span className='p-3'>Profit per hour: {profitPerHour}</span></div>
      </div>
      <Link to={'/SecondHome'} className='flex justify-between items-center absolute right-0 m-4 rounded-lg bg-[#8B8B8B] w-8 h-20'></Link>
      <div className='flex items-center justify-center mt-[30%] '>
        <div className='flex rounded-full  w-60 h-60'>
        {selectedItemImage && (
          <img className='flex justify-between items-center h-[140px] w-[160px] m-auto' src={selectedItemImage} alt="" />
        )}
          </div>
      </div>

    </div>
  )
}

export default Home