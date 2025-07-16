import React from 'react'
import { Link } from 'react-router-dom'
import tick from '../assets/svgs/tick.svg'
function Pricing() {
     const priceCards = [
  {
    id: 1,
    name: 'Basic',
    for: 'For Purchases of 50,000/= and below',
    importances: [
      'Ideal for small scale messaging',
      'Affordable rates',
      'Basic support'
    ],
    price: 'Ugx35',
  },
  {
    id: 2,
    name: 'Pro',
    for: 'For Purchases below 50,000/= to 500,000/=',
    importances: [
      'Mid tier messaging needs',
      'Enhanced Support',
      'Priority delivery'
    ],
    price: 'Ugx30',
  },
  {
    id: 3,
    name: 'Premium',
    for: 'For Purchases of 500,000/= and above',
    importances: [
      'High volume messaging',
      'Dedicated support',
      'Advanced Reporting'
    ],
    price: 'Ugx25',
  },
]

  return (
    <section className=" pt-10 dark:text-[#E2E2B6] dark:bg-gradient-to-t from-[#021526] to-[#03346E] h-fit pl-4 space-y-3 pr-4 md:pl-20 md:pr-20   flex flex-col" >
      <h1 className='self-center relative text-3xl '>
          Pricing
          <span className='w-15 h-1 bg-blue-500 border-blue-500 absolute left-3.5 top-12'></span>
      </h1>
      
      <p className='text-center md:max-w-3xl m-auto mt-4 text-base 2xl:text-3xl md:text-lg '>Choose from our flexible pricing plans, tailored for Basic,Pro and Premium needs, offering reliable tools,support and affordable SMS rates</p>
        
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 2xl:px-30 gap-8 2xl:gap-18 mt-8'>
        
        {priceCards.map((priceCard)=>
         <div key={priceCard.id} className='flex flex-col pt-8 pb-8 2xl:pb-0 2xl:h-130 bg-[#E2E2B6] text-[#021526] transition-colors duration-300 ease-in-out hover:bg-[#021526]  hover:text-white hover: shadow-md rounded-lg p-3 pl-8 2xl:px-12 2xl:pt-10'>
           <h3 className='font-semibold text-xl 2xl:text-3xl'>{priceCard.name}</h3>
           <p className='text-base 2xl:text-xl'>{priceCard.for}</p>
           <span className='text-3xl mt-7 2xl:text-5xl'>{priceCard.price}<sub className='text-sm'>/Sms</sub></span>

           <ul  className='mt-9 text-base 2xl:text-2xl space-y-3'>
            {priceCard.importances.map((point, index) => (
              <li key={index}  className="flex items-center gap-2">
                <img src={tick} width={25} alt='tick'/> 
                {point}
              </li>
            ))}
           </ul>
           <Link className='mt-10 2xl:mt-16 text-base 2xl:text-2xl md:text-lg flex gap-1 items-center ' >Start now</Link>
           <p></p>
           
         </div>
         
        )}
      </div>
      
    </section>
  )
}

export default Pricing
