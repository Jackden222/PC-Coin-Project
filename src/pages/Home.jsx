import React from 'react'

const Home = () => {
  return (
    <div className='pt-4 bg-[#272727] w-full h-screen'>
      <div className='flex top-0 bg-black/10 mb-1 rounded-2xl px-6 py-4 justify-between items-center'>
        <div className='border-gray-600 border-[1px] rounded-md text-sm text-white'><span className='p-3'>Balance: 20 000</span></div>
        <div className='border-gray-600 border-[1px] rounded-md text-sm text-white'><span className='p-3'>Profit per hour: 20 000</span></div>
      </div>
      <div className='flex items-center justify-center mt-[30%] '>
        <div className='flex bg-slate-400/30 rounded-full w-80 h-80'>
          
        </div>
      </div>
    </div>
  )
}

export default Home