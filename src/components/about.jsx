import animation from '../assets/animations/Animation - 1750071844957.json'
import Lottie from 'lottie-react'
import { FaCircle } from 'react-icons/fa'

function About(){
    const content =[
        {
          id:1,
          service:'We provide fast, dependable bulk SMS services for businesses of all sizes'
        },
        {
          id:2,
          service:'Seamlessly integrate our powerful SMS API into your applications for efficient communication'

        },
        {
          id:3,
          service:'Enjoy competitive pricing with scalable packages tailored to your messaging needs'
        },
        {
          id:4,
          service:'Track your messages in real-time with detailed delivery reports and insights.'
        },

        

    ]
  return(
    <section id='about' className='  dark:text-[#E2E2B6] dark:bg-[#050816] h-fit flex flex-col max-w-screen md:px-10 lg:px-30  pl-4 pr-4 pt-20 pb-10 justify-center '>
        <h1 className='dark:text-[#ffffff] font-semibold  self-center relative text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl '>ABOUT US</h1>
          <p className='text-center text-xl md:max-w-3xl md:mx-auto mt-6 2xl:text-4xl'>We are Uganda's leading and most trusted provider of bulk SMS solutions, delivering high-quality messaging services to businesses of all sizes.</p>
        <div className=' flex  flex-col sm:flex-col md:flex-col lg:flex-row  w-full gap-7 mt-10 2xl:mt-25'>
       <div className='w-full px-6 pt-3 pb-6 border-b-3 dark:border-[#ffffdc] dark:bg-[#1d1836] rounded-lg'>
      
       
<span className="flex flex-col gap-3 w-full mt-4">
    <h1 className='dark:text-[#ffffff] mb-4 font-semibold  text-2xl 2xl:text-3xl '>Expertise</h1>
<ul className="flex flex-col gap-3 w-full ">
  {content.map((c) => (
    <li
      key={c.id}
      className="relative  pl-5 text-base 2xl:text-xl dark:text-white before:content-[''] before:absolute before:left-0 before:top-1/3 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-white"
    >
      {c.service}
    </li>
  ))}
</ul>

</span>


         
       </div>

       <div className='w-full border border-[#915eff] h-90 dark:bg-[#090325] flex items-center justify-center rounded-lg'>
       <Lottie animationData ={animation} loop ={true} width={40} className='w-[50%]'/>
       </div>
       </div>
    </section>
    
  )
} 
export default About