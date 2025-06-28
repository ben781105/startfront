import Navbar from "./globalcomponents/navbar"
import Herosection from "./herosection"
import About from "./about"
import Features from "./features"
import Marketing from "./marketing"
import Pricing from "./pricing"
import FAQ from "./faqs"
import Footer from "./globalcomponents/footer"
function Homepage(){
  return(
    <div className="w-full overflow-x-hidden">
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