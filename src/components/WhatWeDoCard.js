import React from 'react'
import { useState } from 'react';

const WhatWeDoCard = ({image,title,description}) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = ()=>{
        if(!isHover){
            setIsHover(true)
        }
    }

  return (
    <div className='relative bg-white w-[400px] h-[450px] rounded-xl z-3 border-b-[10px] border-b-[#2a2b6b] shadow-xl shadow-[#dddddd]' onMouseLeave={()=>{setIsHover(false)}} onMouseOver={(e)=>{handleMouseOver(e)}}>
        <div  className={`absolute w-[400px] h-[450px] rounded-xl  top-0 right-0  ease-in-out duration-300 ${isHover?'opacity-0':'opacity-100'} z-2 border-b-[10px] border-b-[#2a2b6b]`}  style={{backgroundImage:`url(${image})`}} >
        </div>

        <h3 className={`z-6 relative text-[2rem] text-center top-[80%] text-[#2a2b6b] ${isHover?'opacity-0 ':'opacity-100 '}`}>
            {title}
        </h3>

        <div className={`text-[2rem] text-center  text-[#2a2b6b] ${isHover?'opacity-100':'opacity-0'} ease-in-out duration-[1000ms] relative px-10 z-10 mt-12`}>
            <h3 className='mb-10'>
                {title}
            </h3>
            <p className='text-[15px] text-[#2a2b6b] mb-5'>
                {description}
            </p>
            <button className=' text-white bg-[#2a2b6b] text-[22px] font-bold px-6 py-2'>
                Read More
            </button>
        </div>
    </div>
  )
}

export default WhatWeDoCard