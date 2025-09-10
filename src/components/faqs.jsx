import { useState } from "react"
import { FaChevronRight } from "react-icons/fa"

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
    <section id="faq's" className=" pt-20 dark:text-[#E2E2B6] bg-[#ffffff]  dark:bg-[#050816] w-full pl-4 pr-4 h-fit md:pl-20 md:pr-20  pb-8 flex flex-col overflow-x-hidden ">
      <h1 className='light:text-gray-800 dark:text-[#ffffff] font-semibold self-center text-center relative text-2xl sm:text-3xl md:text-4xl '>
          FREQUENTLY ASKED QUESTIONS
      
      </h1>
      
      <div className="w-full  rounded-lg dark:bg-[#100d25] bg-[#915eff]  px-4 py-20 md:px-20 md:py-20 max-w-5xl m-auto mt-10 space-y-4">
        {faqs.map(({answer,id,question})=>
         <div key={id} className=" dark:border bg-[#f3f4f6]  dark:bg-[#090325] dark:border-[#915eff] p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer"
            onClick={()=>toggle(id)}>
                <h2 className=" text-base text-[#1a1a1a] dark:text-[#ffffff] font-semibold">{question}</h2>
                <FaChevronRight
                className={`transform transition-transform duration-300 ${openId===id? "rotate-90":""}`}
                alt="dropdown" width={24} />
            </div>

            <div className={`transition-all duration-300 overflow-hidden ${openId===id?"max-h-40 mt-2 opacity-100":"max-h-0 opacity-0"}`}>
                <p className="text-[#915eff] dark:text-[#ffffdc]">{answer}</p>
            </div>

         </div>
        )}
      </div>
      
    </section>
  )
}

export default FAQ
