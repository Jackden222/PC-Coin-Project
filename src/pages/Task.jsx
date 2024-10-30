import React from 'react';
import external_link from '../assets/icons/external-link.svg';
import circle_dollar from '../assets/icons/circle-dollar-sign.svg';
import arrow_right from '../assets/icons/chevron-right.svg';
import youTube from '../assets/icons/youtube.svg'
import instagram from '../assets/icons/instagram.svg'
import Twitter from '../assets/icons/twitter.svg'

const Task = () => {
  return (
    <div className='pt-4 pb-[100px] bg-[#272727] w-full h-full'>
      <div className='flex items-center justify-center mt-12'>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>        
      </div>

      <p className='flex flex-col justify-between items-center mt-8 m-auto font-Dm font-bold text-white text-xl w-[80%]'>Complete tasks <span>and get more rewards</span></p>

      <p className='flex mt-20 mb-4 m-auto font-Dm text-white text-2xl w-[80%]'>Partners</p>

      <div className='flex flex-col justify-between items-center mb-2'>
        <div className='flex items-center bg-[#343434] h-[80px] w-[90%] rounded-lg'>
          <div className='ml-4 mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
          </div>
          <p className='flex flex-col text-white w-[70%] text-[15px] font-bold'>Subscribe to Ton community<span className='text-[13px] flex'>+700 <img className='ml-1' src={circle_dollar} width={20} /> </span></p>
          
          <img className='pr-2' src={external_link}/>
        </div>
      </div>


      <div className='flex flex-col justify-between items-center mb-2'>
        <div className='flex items-center bg-[#343434] h-[80px] w-[90%] rounded-lg'>
          <div className='ml-4 mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
          </div>
          <p className='flex flex-col text-white w-[70%] text-[15px] font-bold'>Subscribe to Ton community<span className='text-[13px] flex'>+700 <img className='ml-1' src={circle_dollar} width={20} /> </span></p>
          
          <img className='pr-2' src={external_link}/>
        </div>
      </div>

      <div className='flex flex-col justify-between items-center mb-2'>
        <div className='flex items-center bg-[#343434] h-[80px] w-[90%] rounded-lg'>
          <div className='ml-4 mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
          </div>
          <p className='flex flex-col text-white w-[70%] text-[15px] font-bold'>Subscribe to Ton community<span className='text-[13px] flex'>+700 <img className='ml-1' src={circle_dollar} width={20} /> </span></p>
          
          <img className='pr-2' src={external_link}/>
        </div>
      </div>


      <div className='flex items-center justify-center mt-12 mb-12'>
        <div className='bg-[#999999] h-[1px] w-[70%]'></div>
      </div>



      <div className='flex flex-col justify-between items-center mb-2'>
        <div className='flex items-center bg-[#343434] h-[80px] w-[90%] rounded-lg'>
          <div className='ml-4 mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h5"/><path d="M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/></svg>
          </div>
          <p className='flex flex-col text-white w-[70%] font-bold text-2xl'>Daily check in</p>
          
          <img className='pr-2' src={arrow_right}/>
        </div>
      </div>
      
      <p className='flex flex-col justify-between items-center mt-12 mb-12 m-auto font-Dm font-bold text-white text-xl w-[80%]'>Subscribe to our channels</p>


      <div className='flex flex-col justify-between items-center mb-2'>
        <div className='flex items-center bg-[#343434] h-[80px] w-[90%] rounded-lg'>
          <div className='ml-4 mr-4'>
            <img className='pr-2' src={Twitter}/>
          </div>
          <p className='flex flex-col text-white w-[70%] text-[15px] font-bold'>Subscribe to our telegram<span className='text-[13px] flex'>+700 <img className='ml-1' src={circle_dollar} width={20} /> </span></p>
          
          <img className='pr-2' src={external_link}/>
        </div>
      </div>

      <div className='flex flex-col justify-between items-center mb-2'>
        <div className='flex items-center bg-[#343434] h-[80px] w-[90%] rounded-lg'>
          <div className='ml-4 mr-4'>
          <img className='pr-2' src={youTube}/>
          </div>
          <p className='flex flex-col text-white w-[70%] text-[15px] font-bold'>Subscribe to our telegram<span className='text-[13px] flex'>+700 <img className='ml-1' src={circle_dollar} width={20} /> </span></p>
          
          <img className='pr-2' src={external_link}/>
        </div>
      </div>

      <div className='flex flex-col justify-between items-center mb-2'>
        <div className='flex items-center bg-[#343434] h-[80px] w-[90%] rounded-lg'>
          <div className='ml-4 mr-4'>
          <img className='pr-2' src={instagram}/>
          </div>
          <p className='flex flex-col text-white w-[70%] text-[15px] font-bold'>Subscribe to our telegram<span className='text-[13px] flex'>+700 <img className='ml-1' src={circle_dollar} width={20} /> </span></p>
          
          <img className='pr-2' src={external_link}/>
        </div>
      </div>

    </div>
  )
}

export default Task