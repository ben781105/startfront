import React from 'react'
function Pricing() {
     const priceCards =[
        {id:1,
         name:'Basic',
         for:'For Purchases of 50,000/= and below',
         importance1:'Ideal for small scale messaging',
         importance2 :'Affordable rates',
         importance3 : 'Basic support',
         price:'Ugx35'
        },
         {id:2,
         name:'Pro',
         for:'For Purchases below 50,000/= to 500,000/=',
         importance1:'Mid tier messaging needs',
         importance2 :'Enhanced Support',
         importance3 : 'Priority delivery',
         price:'Ugx30'
        },
         {id:3,
         name:'Premium',
         for:'For Purchases of 500,000/= and above',
         importance1:'High volume messaging',
         importance2 :'Dedicated support',
         importance3 : 'Advanced Reporting',
         price:'Ugx25'
        },

     ]
  return (
    <section className=" h-fit pl-4 space-y-3 pr-4 md:pl-20 md:pr-20   flex flex-col" >
      <h1 className='self-center relative text-3xl '>
          Pricing
          <span className='w-15 h-1 bg-blue-500 border-blue-500 absolute left-3.5 top-12'></span>
      </h1>
      
      <p className='text-center md:max-w-3xl m-auto mt-4'>Choose from our flexible pricing plans, tailored for Basic,Pro and Premium needs, offering reliable tools,support and affordable SMS rates</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'>
        {priceCards.map((priceCard)=>
         <div key={priceCard.id} className='flex flex-col pt-8 pb-8 bg-gray-200 shadow-md rounded-lg p-3 pl-8'>
           <h3 className='font-semibold text-xl'>{priceCard.name}</h3>
           <p>{priceCard.for}</p>
           <span className='text-3xl mt-7'>{priceCard.price}<sub className='text-sm'>/Sms</sub></span>

           <ul className='mt-9'>
            <li>✔️{priceCard.importance1}</li>
            <li>✔️{priceCard.importance2}</li>
            <li>✔️{priceCard.importance3}</li>
           </ul>
           <button className='bg-blue-400 p-2 text-xl mt-6 w-[80%] cursor-pointer text-white rounded-3xl'>START NOW</button>
           <p></p>
         </div>
        )}
      </div>
    </section>
  )
}

export default Pricing
