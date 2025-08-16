import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homepage from "./components/homepage"
import Dashboard from "./components/dashboard/dashboardLayout.jsx"
import LoginForm from "./components/login.jsx"
import RegisterForm from "./components/register.jsx"
import ProtectedRoute from "./protectedRoute.jsx"
import HomeDashboard from "./components/dashboard/HomeDashboard.jsx.jsx"
import SmsGroups from "./components/dashboard/smsgroups.jsx"
import ComposeMessage from "./components/dashboard/composeMessage.jsx"
import SendToGroup from "./components/dashboard/sendToGroup.jsx"
import SmsHistory from "./components/dashboard/smsHistory.jsx"
function App(){
   return (
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/dashboard" element={<Dashboard />}>
         <Route index element={<HomeDashboard/>}/>
         <Route path="/dashboard/smsgroups" element={<SmsGroups/>}/>
         <Route path="/dashboard/messages/compose" element={<ComposeMessage/>}/>
         <Route path="/dashboard/messages/sendtogroup" element={<SendToGroup/>}/>
         <Route path="/dashboard/smshistory" element={<SmsHistory/>}/>
        </Route>

        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
       </Routes>
     </BrowserRouter>
  )
}
export default App