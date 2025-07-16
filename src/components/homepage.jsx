import Navbar from "./globalcomponents/navbar"
import Herosection from "./herosection"
import About from "./about"
import Features from "./features"
import Marketing from "./marketing"
import Pricing from "./pricing"
import FAQ from "./faqs"
import Footer from "./globalcomponents/footer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadUser } from "../store/features/user/userSlice"
function Homepage(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  
 

  return(
    <div className="w-full overflow-x-hidden dark:bg-gray-900">
     <Navbar/>
     <Herosection/>
     <About/>
     <Features/>
     <Marketing/>
     <Pricing/>
     <FAQ/>
     <Footer/>
    </div>
  )
}
export default Homepage