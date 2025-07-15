import animation from '../assets/animations/Animation - 1750071844957.json'
import Lottie from 'lottie-react'
import checkbox from '../assets/svgs/checkbox.svg'
function About(){
    const content =[
        {
          id:1,
          service:'Reliable Bulk SMS Services: We provide fast, dependable bulk SMS services for businesses of all sizes'
        },
        {
          id:2,
          service:' API Integration: Seamlessly integrate our powerful SMS API into your applications for efficient communication'

        },
        {
          id:3,
          service:' Affordable Rates: Enjoy competitive pricing with scalable packages tailored to your messaging needs'
        },
        {
          id:4,
          service:'Real-Time Delivery Reports: Track your messages in real-time with detailed delivery reports and insights.'
        },

        

    ]
  return(
    <section className=' h-fit flex flex-col max-w-screen md:px-10 lg:px-30  pl-4 pr-4 pt-8 pb-8 justify-center '>
        <h1 className='self-center relative text-2xl sm:text-3xl 2xl:text-5xl '>
          Know who we are
          <span className='w-20 2xl:w-35 h-1 bg-blue-500 border-blue-500 absolute left-18 top-13 2xl:top-16 2xl:left-37 '></span>
        </h1>
        <div className=' flex flex-col sm:flex-col md:flex-col lg:flex-row  w-full gap-7 mt-13 2xl:mt-25'>
       <div className='w-full'>
        <p className='text-2xl text-bold 2xl:text-4xl'>Uganda's leading and most trusted bulk sms solutions provider</p>
        <p className='mt-5 text-lg 2xl:text-2xl'>We are Uganda's leading and most trusted provider of bulk SMS solutions, 
            delivering reliable, high-quality messaging services to businesses of all sizes.</p>
        
        <ul className='flex flex-col gap-3 w-full mt-4'>
            {content.map((c)=>
            <li key={c.id}
            className='text-base 2xl:text-xl flex gap-1 items-start'
            >
                <img src={checkbox} width={20} alt="" /> {c.service}
            </li>
            )}
        </ul>

         
       </div>

       <div className='w-full  border-1 border-gray-300  flex items-center justify-center rounded-lg'>
       <Lottie animationData ={animation} loop ={true} width={40} className='w-[50%]'/>
       </div>
       </div>
    </section>
    
  )
} 
export default About