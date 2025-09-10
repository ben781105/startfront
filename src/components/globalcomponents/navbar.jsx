
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Features", "Pricing", "FAQ's"];

  const navigate = useNavigate();
 

  const toDashboard = () => {
    setIsOpen(false);
    navigate('/dashboard');
  };


  return (
    <nav className="bg-[#ffffff]/40  pb-4 dark:bg-[#050816]/40 blackdrop-filter backdrop-blur-xs  dark:text-[#021526] flex flex-col z-50 fixed top-0 left-0 right-0 gap-5 p-3 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:gap-40">
      <div className="flex items-center justify-between w-full md:pl-20 md:w-auto">
        <h1 className=" text-[#1a1a1a] dark:text-[#ffffff] text-2xl md:text-3xl  font-semibold sm:text-3xl">SEND IT</h1>
        <FaBars
          className="cursor-pointer dark:text-[#ffffff] md: md:hidden text-2xl"
          alt="menu"
          width={30}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <div className={`flex-col md:flex md:flex-row md:items-center md:gap-10 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-70 mt-2' : 'max-h-0'
      } md:max-h-full md:mt-0`}>
        <ul className="flex flex-col gap-4  md:gap-10 md:flex md:flex-row ">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => setIsOpen(false)}
              href={`#${link.toLowerCase()}`}
              className="text-base text-[#6b7280] hover:text-[#1a1a1a] dark:text-[#848298] font-semibold dark:hover:text-[#ffffff] transition duration-400 cursor-pointer"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        <button
          onClick={toDashboard}
          className="bg-[#915eff] font-semibold p-2 mt-4 md:mt-0 rounded-sm text-white"
        >
          DASHBOARD
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
