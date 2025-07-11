import { useState } from "react";
import menu from '../../assets/svgs/menu.svg';
import { useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";
function Navbar() {

  
  const [isOpen, setIsOpen] = useState(false);
   const navLinks = ["Home", "About", "Features", "Pricing", "FAQ's", ];

   const navigate = useNavigate();
   const toDashboard = () => {
      setIsOpen(false);
      navigate('/dashboard');
  };

  return (
    <nav className="flex flex-col z-50 fixed top-0 left-0 right-0    bg-red-300 gap-2 p-3 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:gap-40">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1>Send It</h1>
        <img
          src={menu}
          className="cursor-pointer md:hidden"
          alt=""
          width={30}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <div
        className={`flex-col md:flex md:flex-row md:items-center md:gap-30 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60 mt-2' : 'max-h-0'
        } md:max-h-full md:mt-0`}
      >
        <ul className="flex flex-col  gap-4  md:flex md:flex-row md:gap-6">
         {navLinks.map((link, index) => (
          <li key={index}
          onClick={() => setIsOpen(false)}
           className="text-base ">
            {link}
          </li>
        ))}
        </ul>

        <button 
        onClick={toDashboard}
        className="bg-blue-500 p-2 mt-4 md:mt-0 rounded-sm text-white">

          DASHBOARD
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
