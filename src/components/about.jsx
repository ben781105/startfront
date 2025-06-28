import aboutImage from '../assets/images/message3.jpg'

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
    <section className=' h-fit flex flex-col max-w-screen flex-wrap md:pl-30 md:pr-30 pl-4 pr-4 pt-8 pb-8 justify-center '>
        <h1 className='self-center relative text-3xl '>
          KNOW WHO WE ARE
          <span className='w-30 h-1 bg-blue-500 border-blue-500 absolute left-18 top-13 '></span>
        </h1>
        <div className=' flex flex-col md:flex-row w-full gap-7 mt-13'>
       <div className='w-full'>
        <p className='text-2xl text-bold'>Uganda's leading and most trusted bulk sms solutions provider</p>
        <p>We are Uganda's leading and most trusted provider of bulk SMS solutions, 
            delivering reliable, high-quality messaging services to businesses of all sizes.</p>
        
        <ul className='flex flex-col gap-3 w-full mt-4'>
            {content.map((c)=>
            <li key={c.id}
            className='text-sm'
            >
                ✅{c.service}
            </li>
            )}
        </ul>

         
       </div>

       <div className='w-full h-95 rounded-lg'>
        <img 
        className='object-cover w-full h-full rounded-lg'
        src={aboutImage} alt="" />
       </div>
       </div>
    </section>
    
  )
} 
export default About