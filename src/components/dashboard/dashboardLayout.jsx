import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'
import { FaUserLock,FaBars } from 'react-icons/fa'
import profile from '../../assets/images/sarah.png'  
import { useState } from 'react'
import api from '../../api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import ConfirmLogout from './ConfirmLogout'
import { motion as Motion } from 'framer-motion'
import ThemeToggle from '../themeToggle'
import { useSelector } from 'react-redux'
function Dashboard() {

  const [user, setUser] = useState({});
  const [openSidebar, setOpenSidebar] = useState(false);
  const [logout ,setLogout] = useState(false)
  const theme = useSelector((state) => state.theme.mode);
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

     if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  },[theme])

 
  return (
    <main className='flex dark:bg-[#050816] relative w-full min-h-screen overflow-x-hidden border-3'>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} setLogout={setLogout} logout={logout} />
      <section className='  dark:bg-[#050816] relative flex-1 px-4 w-full h-full'> 
        <header className='flex dark:bg-[#050816] items-center justify-between '>
        <FaBars 
        alt="menu"  
        size={30}
        className='md:hidden cursor-pointer dark:text-[#ffffff]'
        onClick={() => setOpenSidebar(!openSidebar)}
        />

        <span className='flex items-center gap-3'>
          <h3 className=' text-base md:text-xl dark:text-[#ffffff] font-semibold'>{String(user?.username || "").toUpperCase()}</h3>
          <FaUserLock className=' text-[#915eff]'/>
        </span>
        <div className='flex items-center relative gap-4  p-2 rounded-lg '>
          
          <span className='flex items-center cursor-pointer'>
            <img src={profile} alt="profile"
            className='w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' 
            />
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
       
        <ThemeToggle/>
      </section>
    </main>
  )
}

export default Dashboard
