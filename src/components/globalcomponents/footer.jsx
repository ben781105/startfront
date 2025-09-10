import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#f3f4f6] dark:text-[#E2E2B6] dark:bg-[#100d25] w-full pb-20 pt-6 mb-auto flex gap-8 justify-between pl-20 pr-20 md:pl-30 md:pr-30 flex-wrap'>
      <div>
        <h1 className='text-3xl italic font-semibold dark:text-[#ffffff]'>SEND IT</h1>
        <span className='flex flex-col space-y-1 mt-6'>
            <span className='flex items-center'>
              <p className='font-semibold text-[#848298]'>Phone</p> 
              : &nbsp;
              <a className='dark:text-[#915eff]  font-semibold text-[#1a1a1a]' href='tel+256708693920'>0708693920</a>
            </span>
            <span className='flex items-center font-semibold text-[#848298]'>
              <p className='font-semibold text-[#848298]'>Email</p>
              : &nbsp;
              <a className='dark:text-[#915eff] text-[#1a1a1a]' href='mailtobenardleno78@gmail.com'>sendit@gmail.com</a>
            </span>
        </span>
      </div>

      <div className='space-y-2'>
        <h2 className='font-semibold text-xl dark:text-[#ffffff]'>Quick Links</h2>
        <ul className='space-y-2 '>
          <li className='dark:text-[#848298] dark:hover:text-[#ffffff] text-[#1a1a1a] hover:text-[#915eff] transition duration-400'>Home</li>
          <li className='dark:text-[#848298] dark:hover:text-[#ffffff] text-[#1a1a1a] hover:text-[#915eff] transition duration-400'>About us</li>
          <li className='dark:text-[#848298] dark:hover:text-[#ffffff] text-[#1a1a1a] hover:text-[#915eff] transition duration-400'>Features</li>
          <li className='dark:text-[#848298] dark:hover:text-[#ffffff] text-[#1a1a1a] hover:text-[#915eff] transition duration-400'>Pricing</li>
          <li className='dark:text-[#848298] dark:hover:text-[#ffffff] text-[#1a1a1a] hover:text-[#915eff] transition duration-400'>F&Q's</li>
        </ul>
      </div>

      <div className='space-y-2'>
        <h2 className='font-semibold text-xl dark:text-[#ffffff]'>Need Assistance?</h2>
        <p className='md:max-w-sm dark:text-[#848298]'>Our support team is here to help you 24/7. 
            Reach out if you have questions or need assistance with our services.</p>
        <button className='mt-4 shadow-md  border dark:border-[#915eff] font-semibold dark:hover:bg-[#848298] transition duration-400 dark:shadow-[#050816] dark:bg-[#100d25] bg-[#915eff] px-4 py-2  text-white cursor-pointer rounded-md'>
          <a href='tel+256708693920'>Call now</a>
          </button>
      </div>
    </footer>
  )
}

export default Footer
