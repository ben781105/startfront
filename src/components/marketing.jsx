import React from 'react'
import Lottie from 'lottie-react'
import { FaCheck,FaCircle } from 'react-icons/fa'

import notepad from '../assets/animations/Notepad.json'
function Marketing() {
    
    const applications =[
        {id:1,
         name:'Promotional Campaigns'
        },
        {id:2,
         name:'Customer Engagement'
        },
        {id:3,
         name:'Event Reminders'
        },
        {id:4,
         name:'Order Notifications'
        },
        {id:5,
         name:'Surveys and Feedback'
        },
        {id:6,
         name:'Loyality Programs'
        },
        {id:7,
         name:'Emergency Alerts'
        },

    ]
  return (
    <section id='marketing' className=' bg-[#ffffff] dark:text-[#E2E2B6] dark:bg-[#050816] w-full pl-4 pr-4 pt-15 pb-10 md:pl-20 space-y-5 md:pr-20 flex flex-col'>
      <h1 className='dark:text-[#ffffff] text-2xl sm:text-3xl md:text-4xl font-semibold self-center relative  2xl:text-3xl '>
          SMS MARKETING
        
      </h1>
        <p className='text-center  mt-4 md:max-w-4xl 2xl:max-w-6xl md:m-auto text-[#6b7289] dark:text-[#ffffdc] text-base md:text-xl2xl:text-2xl'>Sms Marketing utilizes targeted text messaging to engage customers, promote products
             and boost sales with high open rates and instant delivery,enhancing customer loyality and driving conversions
        </p>
      <div className='grid  grid-cols-1 md:grid-cols-2 gap-8 mt-5'>
            <div className='flex dark:bg-[#090325] items-center justify-center border-[#915eff] dark:border-[#915eff] border  rounded-lg w-full'>
                <Lottie animationData={notepad} loop={true} />  
            </div>
    
          <div className=' 2xl:py-30 2xl:px-30 space-y-2 h-full flex flex-col w-full py-9 px-10 bg-[#f3f4f6] dark:bg-[#1d1836] border-b-2 border-[#915eff] dark:text-[#03346E] shadow-md rounded-lg p-3 self-center'>
            <h1 className=' text-[#1a1a1a] dark:text-[#ffffff] text-2xl 2xl:text-3xl font-semibold'>SMS Marketing Use Cases</h1>
            <p className='2xl:text-2xl text-base text-[#6b7280] dark:text-[#848298]'>SMS marketing is versatile and effective for various applications including:</p>
            <ul className='space-y-3 2xl:space-y-6 mt-2'>
              {applications.map((application)=>
              <li key={application.id}
              className='2xl:text-2xl text-base flex items-center gap-1 text-[#1a1a1a] dark:text-[#ffffff]'
              >
                <FaCircle  className='dark:text-[#ffffff] text-[8px]' alt="tick"/>&nbsp;{application.name}
              </li>
            )}
            </ul>
          </div>
      </div>
    </section>
  )
}

export default Marketing
