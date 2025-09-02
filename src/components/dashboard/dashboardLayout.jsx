import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'
import { FaBell,FaUserLock } from 'react-icons/fa'
import profile from '../../assets/images/sarah.png'
import menu from '../../assets/svgs/blue-menu.svg';  
import { useState } from 'react'
import api from '../../api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import ConfirmLogout from './ConfirmLogout'
import { motion as Motion } from 'framer-motion'

function Dashboard() {

  const [user, setUser] = useState({});
  const [openSidebar, setOpenSidebar] = useState(false);
  const [logout ,setLogout] = useState(false)

  useEffect(()=>{
    const getUserInfo = async()=>{
      try{
       const response = await api.get('get_user')
        setUser(response.data)
      
      } catch(error){
        toast.error(error)
      }
    }
    getUserInfo()
  },[])

 
  return (
    <main className='flex w-full min-h-screen overflow-x-hidden border-3'>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} setLogout={setLogout} logout={logout} />
      <section className=' relative flex-1 px-4 w-full h-full'> 
        <header className='flex items-center justify-between '>
        <img 
        src={menu} 
        alt=""  
        width={35}
        className='md:hidden cursor-pointer'
        onClick={() => setOpenSidebar(!openSidebar)}
        />

        <span className='flex items-center gap-3'>
          <h3 className=' text-base md:text-xl text-gray-500'>{user.username}</h3>
          <FaUserLock className=' text-blue-500'/>
        </span>
        <div className='flex items-center relative gap-4  p-2 rounded-lg '>
          <div className="h-6 w-px bg-gray-300" />
          <FaBell/>
          <span className='flex items-center gap-2 cursor-pointer'>
            <img src={profile} alt="profile"
            className='w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' 
            />
            <span className='text-sm'>{user?.username}</span>
          </span>
        </div>
      </header>
              {logout && (
          <Motion.div
            className="absolute top-0 inset-0 z-50  flex items-center justify-center bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLogout(false)}
          >
            <ConfirmLogout onClose={() => setLogout(false)} />
          </Motion.div>
        )}
        <Outlet/>
      </section>
    </main>
  )
}

export default Dashboard
