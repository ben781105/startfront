
import pageNotfound from '../assets/animations/pageNotfound.json'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div className="flex  p-4 w-full overflow-x-hidden relative flex-col items-center justify-center min-h-screen bg-gray-100">
      <Lottie animationData={pageNotfound} loop={true}
      className=' w-110 h-120 md:w-1/2 md:h-1/2'
      />
       <button
       onClick={(()=> navigate('/'))}
        className=' bg-purple-500 text-white px-8 py-2 rounded hover:bg-purple-600'>
        Back home
       </button>
    </div>
)
}
export default PageNotFound