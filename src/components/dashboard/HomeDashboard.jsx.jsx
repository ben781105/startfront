
import Statistics from './statistics'
function HomeDashboard() {

  const metrics=[
    {id:1, name:'ACCOUNT BALANCE', value:'2,500'},
    {id:2, name:'SENT MESSAGES', value:'100'},
    {id:3, name:'FAILED MESSAGES', value:'38'},
    {id:4, name:'REMAINING MESSAGES', value:'200'},
    {id:5, name:'CONTACTS', value:'34'},
    {id:6, name:'PRICING', value:'Shs. 35 @sms'},
  ]


  return (
    <section className='flex-1  mt-8 h-screen pt-0 p-3 space-y-5'>
      <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {metrics.map((metric)=>
       <div key={metric.id} className='flex  items-center h-30   bg-gray-200 shadow-md rounded-lg p-5 '>
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
