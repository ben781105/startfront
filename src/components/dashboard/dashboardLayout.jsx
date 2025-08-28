import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import profile from '../../assets/images/sarah.png'
import { useSelector } from 'react-redux'
function Dashboard() {

  const user = useSelector((state) => state.user.user);
  return (
    <main className='flex w-full min-h-screen overflow-x-hidden border-3'>
      <Sidebar/>
      <section className=' relative flex-1 px-4 w-full h-full'> 
        <header className='flex items-center justify-between '>
        <span>Welcome Back , {user?.username}🎉</span>
        <div className='flex items-center relative gap-4  p-2 rounded-lg '>
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
        <Outlet/>
      </section>
    </main>
  )
}

export default Dashboard
