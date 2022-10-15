import React from 'react'
import video from '../videos/video-1.mp4'
import leftImg from '../imgs/video-left.png';
import rightImg from '../imgs/video-right.png';



const Hero = () => {
  return (
    <div className='flex'>

    <div className={`relative w-[1000px] h-full`}>
        
        <div className='absolute h-full left-0  bg-white w-[100px]'>
        <img className='absolute right-[-30%]' src={leftImg} alt="" />

        </div>

        <video className='w-[1000px] ' autoPlay muted loop  >
             <source src={video} />
        </video>

        <div className='absolute h-full right-0 top-0 bg-white w-[100px]'>
        <img className='absolute  left-[-30%] ' src={rightImg} alt="" />
        </div>

    </div>

    <div className='flex flex-col justify-center'>
        <h2 className='text-[2.3rem] w-[500px]'>
        'ALONE WE CAN DO SO LITTLE;
        </h2>

        <h1 className='text-[3rem] font-bold text-[#2a2b6b] w-[500px]'>
        TOGETHER WE CAN DO SO MUCH'
        </h1>

        <button className='text-white w-fit  text-[20px] bg-[#ff6600] font-bold px-6 py-1 border-[5px] border-transparent hover:border-[5px] hover:border-orange-300 hover:shadow-xl ease-in-out duration-700'>
        Donate
      </button>
        
    </div>

    </div>
  )
}

export default Hero