import React from 'react'
import Hero from '../components/Hero'
import WhatWeDoSection from '../components/WhatWeDoSection'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

const Home = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = ()=>{
        const offset = window.scrollY;
        if(offset>200){
            setScrolled(true)
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(() => {
      
        window.addEventListener('scroll',handleScroll);
    
    
    }, [])
    

  return (
    <>
    <section className={`${scrolled?'opacity-0':'opacity-100'} ease-in-out duration-500`}>

     <Hero/>    

    </section  >

    <section className={`${!scrolled?'opacity-0':'opacity-100'} ease-in-out duration-500`}>

    <WhatWeDoSection/>

    </section>

    <Footer/>
    </>
  )
}

export default Home