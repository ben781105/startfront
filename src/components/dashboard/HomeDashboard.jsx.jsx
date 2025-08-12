import React from 'react'
import { FaBell } from 'react-icons/fa'

import Statistics from './statistics'
function HomeDashboard() {
  const metrics=[
    {id:1, name:'ACCOUNT BALANCE', value:'500'},
    {id:2, name:'SENT MESSAGES', value:'50'},
    {id:3, name:'FAILED MESSAGES', value:'42'},
    {id:4, name:'REMAINING MESSAGES', value:'2000'},
  ]
  return (
    <section className='flex-1  h-screen pt-0 p-6 space-y-5'>
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

export default HomeDashboard
