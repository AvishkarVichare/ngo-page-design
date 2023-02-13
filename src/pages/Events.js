import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'

const Events = () => {

    const [campaigns, setCampaigns] = useState([]);

    const getCampaigns = async()=>{
        const {data} = await axios.get('http://localhost:5000/api/c/get', {
        headers:{
            token: localStorage.getItem('token')
        }
    })
    console.log(data);
    setCampaigns(data.campaigns)
    
    }
    useEffect(() => {
    getCampaigns()
    }, [])
    
    return (
        <>
            <section>
                <h3 className='text-[3rem] text-center'>
                    Top campaign
                </h3>
                <p className='text-center text-[10px]'>
                    *Vote for campaigns which let us choose which one to start first
                </p>

                <EventCard  name= {campaigns[0]?.name} target= {campaigns[0]?.target} votes= {campaigns[0]?.votes.length}  />



               <div className='mt-10 flex flex-col gap-4'>
               <h3 className='text-[3rem] text-center'>
                    All campaigns
                </h3>

                {
                    campaigns.map((e, index)=>{
                        return(
                <EventCard key={index} name= {e?.name} target= {e?.target} votes= {e?.votes.length}  />
                        )
                    })
                }
               </div>
            </section>
        </>
    )
}

export default Events