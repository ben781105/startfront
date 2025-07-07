import React from 'react'
import { FaBell } from 'react-icons/fa'
import profile from '../../assets/images/sarah.png'
import Statistics from './statistics'
function Maincontent() {
  const metrics=[
    {id:1, name:'ACCOUNT BALANCE', value:'500'},
    {id:2, name:'SENT MESSAGES', value:'50'},
    {id:3, name:'FAILED MESSAGES', value:'42'},
    {id:4, name:'REMAINING MESSAGES', value:'2000'},
  ]
  return (
    <section className='flex-1  h-screen pt-0 p-6 space-y-5'>
      <header className='flex items-center justify-between '>
        <span>Welcome Back , Benard 🎉</span>
        <div className='flex items-center relative gap-4  p-2 rounded-lg w-[50%]'>
          <input type="search" 
          placeholder='Search anything'
          className='p-2 rounded-lg border-1 w-90 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out'
          />
          <div className="h-6 w-px bg-gray-300" />
          <FaBell/>
          <span className='flex items-center gap-2 cursor-pointer'>
            <img src={profile} alt="profile"
            className='w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' 
            />
            <span className='text-sm'>Benard</span>
          </span>
        </div>
      </header>
      <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {metrics.map((metric)=>
       <div key={metric.id} className='flex  items-center justify-center bg-gray-200 shadow-md rounded-lg p-5 '>
        <span className=' border-l-2 pl-2 border-l-green-500 flex flex-col'>
          <h1 className='text-base '>{metric.name}</h1>
          <p className='text-2xl font-semibold'>{metric.value}</p>
        </span>
       </div>
      )}
      </div>

      <Statistics/>
    </section>
  )
}

export default Maincontent
