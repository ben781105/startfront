import React from 'react'

function Footer() {
  return (
    <footer className='w-full bg-gray-200  pb-20 pt-6 mb-auto flex gap-8 justify-between pl-20 pr-20 md:pl-30 md:pr-30 flex-wrap'>
      <div>
        <h1 className='text-3xl italic'>SEND IT</h1>
        <span className='flex flex-col space-y-1 mt-6'>
            <p>Phone:&nbsp;<a className='text-blue-500' href='tel+256708693920'>0708693920</a></p>
            <p>Email:&nbsp;<a className='text-blue-500' href='mailtobenardleno78@gmail.com'>sendit@gmail.com</a></p>
        </span>
      </div>

      <div className='space-y-2'>
        <h2 className='font-semibold text-xl'>Quick Links</h2>
        <ul className='space-y-2'>
          <li>Home</li>
          <li>About us</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>F&Q's</li>
        </ul>
      </div>

      <div className='space-y-2'>
        <h2 className='font-semibold text-xl'>Need Assistance?</h2>
        <p className='md:max-w-sm'>Our support team is here to help you 24/7. 
            Reach out if you have questions or need assistance with our services.</p>
        <button className='mt-4 bg-blue-500 p-2 text-white cursor-pointer rounded-lg'>Call Now</button>
      </div>
    </footer>
  )
}

export default Footer
