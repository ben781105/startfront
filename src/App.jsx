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
import { ToastContainer } from "react-toastify"
import PageNotFound from "./components/pageNotfound.jsx"
import "react-toastify/dist/ReactToastify.css"
import Contacts from "./components/dashboard/Contacts.jsx"
import Comingsoon from "./components/comingSoon.jsx"

function App(){
   return (
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
         <Route index element={<HomeDashboard/>}/>
         <Route path="/dashboard/smsgroups" element={<SmsGroups/>}/>
         <Route path="/dashboard/messages/compose" element={<ComposeMessage/>}/>
         <Route path="/dashboard/messages/sendtogroup" element={<SendToGroup/>}/>
         <Route path="/dashboard/smshistory" element={<SmsHistory/>}/>
         <Route path="/dashboard/contacts" element={<Contacts/>}/>
         <Route path="/dashboard/payments" element={<Comingsoon/>}/>
        </Route>

        <Route path="/signin" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="*" element={<PageNotFound/>}/>
       </Routes>

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
     </BrowserRouter>
  )
}
export default App