import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homepage from "./components/homepage"
import Dashboard from "./components/dashboard"
function App(){
   return (
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
     </BrowserRouter>
  )
}
export default App