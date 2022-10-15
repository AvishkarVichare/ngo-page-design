import React from 'react'

const Footer = () => {
  return (
    <footer class="text-white body-font bg-[#2a2b6b]">
        <div className='py-3 border-b-2 border-b-gray-300 flex justify-center gap-10'>
            <h1 className='font-bold text-[2rem]  text-center'>
            Save a life.Donate to our NGO
            </h1>

            <div className='flex items-center'>
                <input className='py-[9px] w-[150px] pl-4 font-bold text-[20px] bg-transparent border-2 border-gray-300' type="number" />
                <button className='text-white w-fit  text-[20px] bg-[#ff6600] font-bold px-6 py-[7px] border-[5px] border-transparent hover:border-[5px] hover:border-orange-300 hover:shadow-xl ease-in-out duration-700'>
        Donate
      </button>
            </div>
        </div>
  <div class="container px-5 py-24 mx-auto text-[18px]">
    <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4 justify-center">
    <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold  tracking-widest text-sm mb-3">Quick Links</h2>
        <nav class="list-none mb-10">
          <li>
            <a class=" hover:text-gray-800">Home</a>
          </li>
          <li>
            <a class=" hover:text-gray-800">About</a>
          </li>
          <li>
            <a class=" hover:text-gray-800">Contact</a>
          </li>
          <li>
            <a class=" hover:text-gray-800">FAQ</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold  tracking-widest text-sm mb-3">Contact Adress</h2>
        <div>
            Our Adress goes here
        </div>
      </div>
   
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium  tracking-widest text-sm mb-3">Contact Adress</h2>
        <nav class="list-none mb-10">
          <li>
            <a class=" hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class=" hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class=" hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class=" hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>

 
    </div>
  </div>

<div className='bg-[#15164b] font-bold text-center py-3 text-white'>
<h2>Copyright © NGO 2022 All Rights Reserved</h2>
</div>
</footer>
  )
}

export default Footer