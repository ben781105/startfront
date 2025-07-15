
import chatIcon from '../assets/svgs/chat-icon.svg'
import padlockIcon from '../assets/svgs/padlock-icon.svg'
import tickIcon from '../assets/svgs/tick-icon.svg'
import userIcon from '../assets/svgs/user-icon.svg'
function Features(){

  const features =[
    {id:1,
     icon:chatIcon,
     name:'Bulk SMS',
     desc:'Send it enables mass messaging to thousands, enhancing communication'
    },
    {id:2,
     icon:tickIcon,
     name:'SMS Campaign Creation',
     desc:'Personalization,compose and schedule messages to recepients'
    },
    {id:3,
     icon:userIcon,
     name:'Delivery Reports',
     desc:'Track your messages in real-time with detailed reports and insights'
    },
    {id:4,
     icon:padlockIcon,
     name:'Api integration',
     desc:'Connect and trigger SMS from your systems for effective communication'
    }
  ]
  return(
    <section className="h-fit pr-4 pl-4 pt-8 overflow-x-hidden md:pl-20 md:pr-20 space-y-2 flex flex-col mt-5">
      <h1 className='self-center relative text-3xl 2xl:text-3xl'>
          Features
          <span className='w-15 h-1 bg-blue-500 border-blue-500 absolute left-6 top-12 '></span>
      </h1>
      
      <p className='self-center text-center  text-lg 2xl:text-2xl mt-6'>Bulk SMS sending, SMS Campaign Creation, Delivery Reports and Anaytics, Api Integration</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 overflow-x-hidden'>
        {features.map((feature)=>
         <div className='flex w-full lg:p-4 md:pl-6 md:pr-6 h-70 justify-center items-center flex-col p-3 text-center bg-gray-100 shadow-md rounded-lg ' 
         key={feature.id}
         >
            <img src={feature.icon} alt="featute-icon" width={40}/>
            <h2 className='text-2xl text-semibold mt-3 '>{feature.name}</h2>
            <p className='text-base 2xl:text-2xl mt-2'>{feature.desc}</p>
         </div>
        )}
      </div>
    </section>
  )
}
export default Features