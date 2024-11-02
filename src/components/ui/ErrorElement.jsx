import React from 'react'

const ErrorElement = () => {
  return (
    <div className='flex justify-center w-full h-screen bg-slate-500'>
      <div className='flex justify-between items-center w-[80%] font-Roboto '>
        <p className='flex flex-col font-bold text-5xl'>Error page<span className='mt-10 text-xl '>Try again and report this bugs</span></p>
        
      </div>
    </div>
  )
}

export default ErrorElement