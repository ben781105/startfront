import { motion as Motion } from 'framer-motion'
import api from '../../api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function ConfirmLogout({onClose}){
    const navigate = useNavigate();

    const logOut = async()=>{
        try{
            await api.post('logout/',
                {refresh: localStorage.getItem('refresh')}
            )
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            navigate('/')
            toast.success("logged out successfully")
        } catch(error){
            toast.error( error?.response?.data?.detail || "logout failed, please try again later")
        }
    }

 return(
    <Motion.div
         initial={{opacity:0,scale:0.8,y:-50}}
         animate={{opacity:1,scale:1,y:0}}
         exit={{opacity:0,scale:0.8,y:-50}}
         transition={{duration:0.3}}
         onClick={(e) => e.stopPropagation()}
         className="bg-white dark:bg-[#100d25] rounded-md shadow-lg pl-6 pr-4 py-4 w-full h-60 max-w-md">
             <h1 className='text-2xl font-semibold dark:text-[#ffffff]'>Log out</h1>
             <p className='mt-6 text-lg dark:text-[#848298]'>Are you sure you want to log out?</p>
             <span className="flex gap-2 mt-15 items-end justify-end">
              <button 
              onClick={onClose}
              className="text-white bg-gray-400 px-4 py-2 rounded-md"
              >
                Cancel
              </button>

              <button
              onClick={() => {
                logOut();
                onClose();
              }}
              className="text-white bg-red-500 px-4 py-2 rounded-md">
                Log out
              </button>
             </span>
           </Motion.div>
 )

}
 export default ConfirmLogout