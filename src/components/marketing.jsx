import React from 'react'
import message1 from '../assets/images/message1.jpg'
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
    <section className='w-full pl-4 pr-4 pt-10 pb-10 md:pl-20 space-y-5 md:pr-20 flex flex-col'>
      <h1 className='self-center relative text-3xl '>
          SMS Marketing
          <span className='w-15 h-1 bg-blue-500 border-blue-500 absolute left-17 top-12 '></span>
      </h1>
        <p className='text-center mt-4 md:mt-6 md:max-w-4xl md:m-auto'>Sms Marketing utilizes targeted text messaging to engage customers, promote products
             and boost sales with high open rates and instant delivery,enhancing customer loyality and driving conversions
        </p>
      <div className='grid  grid-cols-1 md:grid-cols-2 gap-8 mt-5'>
            <div>
                <img 
                className=' rounded-lg object-cover w-full h-full'
                src={message1} alt="" />
            </div>
    
          <div className=' space-y-2 h-fit pb-4  bg-gray-300 shadow-md rounded-lg p-3'>
            <h1 className='text-2xl font-bold'>SMS Marketing Use Cases</h1>
            <p>SMS marketing is versatile and effective for various applications including:</p>
            <div>
              {applications.map((application)=>
              <li key={application.id}
              className=''
              >
                ✔️&nbsp;{application.name}
              </li>
            )}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Marketing
