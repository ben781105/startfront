import Navbar from "./globalcomponents/navbar"
import Herosection from "./herosection"
import About from "./about"
import Features from "./features"
import Marketing from "./marketing"
import Pricing from "./pricing"
import FAQ from "./faqs"
import Footer from "./globalcomponents/footer"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadUser } from "../store/features/user/userSlice"
import ThemeToggle from "./themeToggle"
function Homepage(){
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  
  useEffect(() => {
    dispatch(loadUser());
     if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  }, [dispatch,theme]);

  return(
    <div className="w-full relative overflow-x-hidden">
     <Navbar/>
     <Herosection/>
     <About/>
     <Features/>
     <Marketing/>
     <Pricing/>
     <FAQ/>
     <Footer/>
     <ThemeToggle/>
    </div>
  )
}
export default Homepage