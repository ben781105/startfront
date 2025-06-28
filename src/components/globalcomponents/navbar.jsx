
function Navbar(){
    return(
       <nav className="flex bg-red-300 justify-between items-center p-3 pl-10 pr-10">
         <div>
            <h1>Send It</h1>
         </div>

         <ul className="hidden md:flex gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ's</li>
         </ul>

         <button
         className=" hidden bg-blue-500 p-2 rounded-sm text-white"
         >GET STARTED</button>
       </nav>
    )
}
export default Navbar