import React from 'react'
import Lottie from 'lottie-react'
import tick from '../assets/svgs/tick.svg'
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
    <section className=' dark:text-[#E2E2B6] dark:bg-gradient-to-t from-[#021526] to-[#03346E] w-full pl-4 pr-4 pt-15 pb-10 md:pl-20 space-y-5 md:pr-20 flex flex-col'>
      <h1 className='self-center relative text-3xl 2xl:text-3xl '>
          SMS Marketing
          <span className='w-15 h-1 bg-blue-500 border-blue-500 absolute left-17 top-12 '></span>
      </h1>
        <p className='text-center mt-10 md:mt-6 md:max-w-4xl 2xl:max-w-6xl md:m-auto text-lg 2xl:text-2xl'>Sms Marketing utilizes targeted text messaging to engage customers, promote products
             and boost sales with high open rates and instant delivery,enhancing customer loyality and driving conversions
        </p>
      <div className='grid  grid-cols-1 md:grid-cols-2 gap-8 mt-5'>
            <div className='flex items-center justify-center border-1 border-gray-300 w-full'>
                <Lottie animationData={notepad} loop={true} />  
            </div>
    
          <div className=' 2xl:py-30 2xl:px-30 space-y-2 h-full flex flex-col w-full py-9 px-10 bg-[#E2E2B6] text-[#03346E] shadow-md rounded-lg p-3 self-center'>
            <h1 className='text-2xl 2xl:text-3xl font-bold'>SMS Marketing Use Cases</h1>
            <p className='2xl:text-2xl text-base'>SMS marketing is versatile and effective for various applications including:</p>
            <ul className='space-y-3 2xl:space-y-6 mt-2'>
              {applications.map((application)=>
              <li key={application.id}
              className='2xl:text-2xl text-base flex items-center gap-1'
              >
                <img src={tick} width={25} alt="tick"/>&nbsp;{application.name}
              </li>
            )}
            </ul>
          </div>
      </div>
    </section>
  )
}

export default Marketing
