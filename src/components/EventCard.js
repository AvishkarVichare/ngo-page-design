import React from 'react'

const EventCard = ({name, target, votes}) => {

const handleVote = async()=>{

}

  return (
    <div className='flex justify-between p-3 border-2 border-black  w-[1000px] mx-auto'>
    <h4 className='text-[2rem] font-bold'>
       {name}
    </h4>
   <div className='flex gap-2'>
    <div className='text-[22px]'>
       <span className='font-bold'> Target: Rs.</span> {target}
    </div>
    <div className='text-[22px]'>
    <span className='font-bold'>votes</span>  {votes}
    </div>
   <button className='text-white w-fit  text-[20px] bg-red-700 font-bold px-6 py-1 border-[5px] border-transparent hover:border-[5px] hover:border-orange-300 hover:shadow-xl ease-in-out duration-700'>
        Vote
    </button>
    <button className='text-white w-fit  text-[20px] bg-[#ff6600] font-bold px-6 py-1 border-[5px] border-transparent hover:border-[5px] hover:border-orange-300 hover:shadow-xl ease-in-out duration-700'>
        Donate
    </button>
   </div>
</div>
  )
}

export default EventCard