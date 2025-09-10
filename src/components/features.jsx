
import Tilt from '../tilt';
import {FaEnvelope,FaBullhorn, FaFlag,FaPaperPlane} from 'react-icons/fa'
function Features(){

 const features = [
  {
    id: 1,
    icon: <FaEnvelope size={30} />,
    name: 'Bulk SMS',
    desc: 'Send it enables mass messaging to thousands, enhancing communication',
  },
  {
    id: 2,
    icon: <FaBullhorn size={30} />,
    name: 'SMS Campaign Creation',
    desc: 'Personalization, compose and schedule messages to recipients',
  },
  {
    id: 3,
    icon: <FaFlag size={30} />,
    name: 'Delivery Reports',
    desc: 'Track your messages in real-time with detailed reports and insights',
  },
  {
    id: 4,
    icon: <FaPaperPlane size={30} />,
    name: 'API Integration',
    desc: 'Connect and trigger SMS from your systems for effective communication',
  },
];

  const tiltOptions = {
    scale: 1.01,
    speed: 1000,
    max: 15,
    glare: false,
  };

  return(
    <section id='features' className=" bg-[#fffafa] dark:text-[#E2E2B6] dark:bg-[#050816] h-fit pr-4 pl-4 pt-20 overflow-x-hidden md:pl-20 md:pr-20 pb-10 space-y-2 flex flex-col ">
      <h1 className='dark:text-[#ffffff] font-semibold self-center relative text-2xl sm:text-3xl md:text-3xl 2xl:text-3xl'>FEATURES </h1>
      
      <p className='self-center text-center  text-lg 2xl:text-2xl mt-3 dark:text-[#ffffdc]'>Bulk SMS sending, SMS Campaign Creation, Delivery Reports and Anaytics, Api Integration</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 '>
        {features.map((feature)=>
         <Tilt className='dark:bg-[#151030] flex w-full lg:p-4 md:pl-6 md:pr-6 h-70 justify-center  dark:text-[#021526]  items-center flex-col p-3  text-center transition-colors duration-300 ease-in-out shadow-md rounded-lg' 
         key={feature.id}
         options={tiltOptions}
         >
            <span className=' dark:text-[#915eff] flex items-center'>{feature.icon}</span>
            <h2 className='text-2xl text-semibold mt-3 dark: text-[#ffffff] '>{feature.name}</h2>
            <p className='text-base 2xl:text-2xl mt-2 dark:text-[#848298]'>{feature.desc}</p>
         </Tilt>
        )}
      </div>
    </section>
  )
}
export default Features