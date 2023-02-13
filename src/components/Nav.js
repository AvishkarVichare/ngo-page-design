import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [scrolledForNav, setScrolledForNav] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll',handleNav)
  
    return () => {
      window.removeEventListener('scroll',handleNav)
    }
  }, [])
  

  const handleNav = ()=>{
    const offset = window.scrollY;
    if(offset>100){
      setScrolledForNav(true);
    }
    else{
      setScrolledForNav(false);
    }
  }

  return (
    <>
    
    <header>

    {/* top one  */}
    <div className='flex gap-10 w-[full] bg-[#2a2b6b] text-white py-3 justify-end pr-12 font-bold'>
        <span className='flex items-center ease-in duration-200 hover:text-red-600'>
        <i class="fa-brands fa-whatsapp"></i>
        <h4 className='mx-2'>
        +91-7023509999
        </h4>
        </span>
        <span className='flex items-center ease-in duration-200 hover:text-red-600'>
        <i class="fa-solid fa-phone"></i>
        <h4 className='mx-2'>
        +91-7023509999
        </h4>
        </span>
        <span className='flex items-center ease-in duration-200 hover:text-red-600'>
        <i class="fa-solid fa-envelope"></i>
        <h4 className='mx-2'>
        ngo@gmail.com

        </h4>
        </span>

        <button>
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>

    {/* bottom one  */}
    <div style={
      scrolledForNav?{
      position:'fixed',
      top:'0'
    }:
   { position:'relative'}
    } className='relative   z-20 ease-in duration-1000  flex justify-between items-center py-2 border-2 border-b-gray-300 px-6 bg-white w-full'>
    {/* logo  */}
    <div className='font-bold text-[2rem]'>
        NGO 
    </div>

    <ul className='flex gap-6'>
{/* 
        <li>
        <a className='flex  items-center ' href="/">
           <h4 className='mr-2'>
            About Us
           </h4>
      <i class="fa-solid fa-angle-down"></i>
            </a>
        </li>
        <li>
        <Link className='flex  items-center ' to="/">
           <h4 className='mr-2'>
            Home
           </h4>
      <i class="fa-solid fa-angle-down"></i>
            </Link>
        </li>
        <li>
        <a className='flex  items-center ' href="/">
           <h4 className='mr-2'>
            Causes
           </h4>
      <i class="fa-solid fa-angle-down"></i>
            </a>
        </li>
        <li>
        <a className='flex  items-center ' href="/">
           <h4 className='mr-2'>
            Donate
           </h4>
      <i class="fa-solid fa-angle-down"></i>
            </a>
        </li>
        
        <li>
        <a className='flex  items-center ' href="/">
           <h4 className='mr-2'>
            Contact Us
           </h4>
      <i class="fa-solid fa-angle-down"></i>
            </a>
        </li>
   */}
        
        <li>
        <Link className='flex  items-center ' to="/">
           <h4 className='mr-2'>
            Home
           </h4>
            </Link>
        </li>
        <li>
        <Link className='flex  items-center ' to="/events">
           <h4 className='mr-2'>
            Events
           </h4>
            </Link>
        </li>
        <li>
        <Link className='flex  items-center ' to="/">
           <h4 className='mr-2'>
            About Us
           </h4>
            </Link>
        </li>
    </ul>

        
    <button className='text-white w-fit  text-[20px] bg-[#ff6600] font-bold px-6 py-1 border-[5px] border-transparent hover:border-[5px] hover:border-orange-300 hover:shadow-xl ease-in-out duration-700'>
        Donate
      </button>

    </div>


    </header>

    </>
  )
}

export default Nav