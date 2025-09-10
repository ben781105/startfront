import Tilt from "../tilt"
import { useNavigate } from "react-router-dom";
function Pricing() {

  const navigate = useNavigate();
     const priceCards = [
  {
    id: 1,
    name: 'Basic',
    
    importances: [
      'Ideal for small scale messaging',
      'Affordable rates',
      'Basic support'
    ],
    price: 'Ugx25',
  },
  {
    id: 2,
    name: 'Pro',
    
    importances: [
      'Mid tier messaging needs',
      'Enhanced Support',
      'Priority delivery'
    ],
    price: 'Ugx35',
  },
  {
    id: 3,
    name: 'Premium',
      importances: [
      'High volume messaging',
      'Dedicated support',
      'Advanced Reporting'
    ],
    price: 'Ugx50',
  },
]

const tiltOptions = {
    scale: 1.05,
    speed: 1000,
    max: 15,
    glare: false,
  
  };

  return (
    <section id="pricing" className="pt-20 dark:text-[#ffffdc] bg-[#ffffff] dark:bg-[#050816] h-fit pl-4 space-y-3 pr-4 md:pl-35 md:pr-35 pb-20 flex flex-col overflow-x-hidden w-full" >
      <h1 className='text-[#1a1a1a] font-semibold dark:text-[#ffffff] self-center md:self-center relative text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl '>
          PRICING
      </h1>
      
      <p className='text-center md:max-w-3xl m-auto mt-4 2xl:text-3xl text-[#6b7289] dark:text-[#ffffdc] text-base md:text-xl'>Choose from our flexible pricing plans, tailored for Basic,Pro and Premium needs, offering reliable tools,support and affordable SMS rates</p>
        
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 2xl:px-30 gap-8 px-5  2xl:gap-18 mt-8'>
        
        {priceCards.map((priceCard)=>
         <Tilt 
         options={tiltOptions}
         key={priceCard.id} className='flex flex-col w-full pt-8 pb-8 2xl:pb-0 2xl:h-130 bg-[#f3f4f6] dark:bg-[#100d25]  transition-colors duration-300 ease-in-out   rounded-lg p-3 pl-8 2xl:px-12 2xl:pt-10'>
           <h3 className='font-semibold text-xl 2xl:text-3xl'>{priceCard.name}</h3>
           <span className='xs:text-2xl text-3xl mt-7 2xl:text-5xl dark:text-[#915eff] text-[#1a1a1a]'>{priceCard.price}<sub className='text-sm'>/Sms</sub></span>

           <ul  className='mt-9 text-base 2xl:text-2xl space-y-2'>
            {priceCard.importances.map((point, index) => (
              <li key={index}  className="flex items-center  gap-3 dark:text-[#848298] dark:hover:text-[#ffffff] text-base transition-colors duration-400 ease-in-out  ">
                <span className="flex items-center bg-[#848298]  justify-center w-1.5 h-1.5 rounded-full" />
                <span className="xs:text-sm text-base text-[#6b7280] hover:text-[#1a1a1a] dark:hover:text-[#ffffff] transition duration-400">{point}</span>
              </li>
            ))}
           </ul>
           <button
           onClick={()=>navigate('/dashboard')}
            className='mt-8 w-[40%] shadow-md  shadow-[#ffffff] dark:shadow-[#050816] px-2 py-2 2xl:px-10 2xl:py-5 2xl:text-2xl bg-[#915eff] dark:bg-[#151030] font-semibold text-white dark:hover:bg-[#848298] transition-colors duration-400 ease-in-out rounded-md'> Start now</button>
           <p></p>
           
         </Tilt>
         
        )}
      </div>
      
    </section>
  )
}

export default Pricing
