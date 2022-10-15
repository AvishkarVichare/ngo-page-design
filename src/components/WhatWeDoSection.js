import React from 'react';
import bgImg from '../imgs/wha-we-do-bg.png';
import WhatWeDoCard from './WhatWeDoCard';
import healImg from '../imgs/heal.gif';
import enrichImg from '../imgs/enrich.gif';
import empowerImg from '../imgs/empower.gif';


const WhatWeDoSection = () => {

    const whatWeDoData = [
        {   
            id:1,
            title:'HEAL',
            image:healImg,
            description:'The aim is to make the best medical and healthcare facilities easily accessible to individuals who are in need or having financial difficulty'
            
        },
        {
            id:2,
            title:'ENRICH',
            image:enrichImg,
            description:'We organize mass marriages to enrich the lives of many differently-abled people and provide high-quality education to needy children for a bright future.'
        },
        {
            id:3,
            title:'EMPOWER',
            image:empowerImg,
            description:'NSS provides various platforms to empower the lives of the Divyangs such as talent shows, Divyang parasports, and skill-development initiatives including computer, technical and tailoring training.'
        },
    ]

  return (
    <div style={{ backgroundImage:`url(${bgImg})`, backgroundSize:'cover'}} className='h-[650px] w-full relative bottom-12 pt-[90px]'  >
       <h1 className='text-white  text-center text-[3rem]'>
            WHAT WE DO
        </h1>

        <div className='flex gap-12 justify-center mt-10'>
            {
                whatWeDoData.map(element=>{
                    return(
                       <WhatWeDoCard key={element.id} image={element.image} title={element.title} description={element.description} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default WhatWeDoSection