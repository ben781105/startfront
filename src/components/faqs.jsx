import { useState } from "react"
import rightArrow from '../assets/svgs/forward.svg'
function FAQ() {

  const [openId,setOpenId] =useState(false)

   
  const faqs=[
    {id:1,
     question:'How do i credit my account?',
     answer:'To make a payment, log in to your account and navigate to the Payments tab. Click on "Add New Payment," enter the phone number for the debit, input the amount, and click "Save Payment." You will then receive a prompt to enter your Mobile Money PIN on your phone, which should appear in less than a minute.'
    },
    {
     id:2,
     question:'What happens if I have invalid numbers in my list?',
     answer:'The system intelligently removes all invalid and duplicate numbers from your list, storing only normalized Ugandan numbers.'
    },
    {
     id:3,
     question:'What happens if I schedule a message and my account balance is low during the sending process?',
     answer :'The system checks your account balance each time a message is sent. If your balance is insufficient at any point, the message will not be sent.'
    },
    {
     id:4,
     question:'What happens if I want to send a message to many numbers, but my account balance only allows for a few?',
     answer:'The system will not send the message if your account balance is insufficient to cover all recipients. You must have enough balance to send the message to all intended contacts.'
    }
  ]

   const toggle =(id)=>{
        setOpenId(prev=>(prev===id? false:id))
    }

    
  return (
    <section className="pl-4 pr-4 h-fit md:pl-20 md:pr-20 mt-10 pb-8 flex flex-col">
      <h1 className='self-center text-center relative text-3xl '>
          Frequently Asked Questions
          <span className='w-18 h-1 bg-blue-500 border-blue-500 absolute left-35 top-12'></span>
      </h1>
      
      <div className="w-full max-w-4xl m-auto mt-10 space-y-4">
        {faqs.map(({answer,id,question})=>
         <div key={id} className=" border border-gray-300 p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer"
            onClick={()=>toggle(id)}>
                <h2 className=" text-base font-semibold">{question}</h2>
                <img 
                className={`transform transition-transform duration-300 ${openId===id? "rotate-90":""}`}
                src={rightArrow} alt="" width={24} />
            </div>

            <div className={`transition-all duration-300 overflow-hidden ${openId===id?"max-h-40 mt-2 opacity-100":"max-h-0 opacity-0"}`}>
                <p className="text-blue-600">{answer}</p>
            </div>

         </div>
        )}
      </div>
      
    </section>
  )
}

export default FAQ
