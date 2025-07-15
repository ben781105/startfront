import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homepage from "./components/homepage"
import Dashboard from "./components/dashboard/dashboardLayout.jsx"
import LoginForm from "./components/login.jsx"
import RegisterForm from "./components/register.jsx"
//import ProtectedRoute from "./protectedRoute.jsx"
function App(){
   return (
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
       </Routes>
     </BrowserRouter>
  )
}
export default App