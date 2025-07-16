import { useEffect, useState } from "react";
import menu from '../../assets/svgs/menu.svg';
import { useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../../store/features/theme/themeSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Features", "Pricing", "FAQ's"];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode);
  const darkMode = theme === 'dark';

  const toDashboard = () => {
    setIsOpen(false);
    navigate('/dashboard');
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDark = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="bg-blue-500 dark:bg-[#E2E2B6] dark:text-[#021526] flex flex-col z-50 fixed top-0 left-0 right-0 gap-2 p-3 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:gap-40">
      <div className="flex items-center justify-between w-full md:pl-20 md:w-auto">
        <h1 className=" text-white dark:text-[#021526] md:text-3xl text-2xl">SEND IT</h1>
        <img
          src={menu}
          className="cursor-pointer md:hidden"
          alt=""
          width={30}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <div className={`flex-col md:flex md:flex-row md:items-center md:gap-10 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-70 mt-2' : 'max-h-0'
      } md:max-h-full md:mt-0`}>
        <ul className="flex flex-col gap-4 md:flex md:flex-row md:gap-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => setIsOpen(false)}
              className="text-base"
            >
              {link}
            </li>
          ))}
        </ul>

        {darkMode
          ? <span className='flex items-center  bg-[#6EACDA] justify-center  w-8 h-8 rounded-full'><FaSun onClick={toggleDark} className='text-lg text-[#fff] cursor-pointer' /></span>
          :<span className='flex items-center  bg-[#6EACDA] justify-center  w-8 h-8 rounded-full'><FaMoon onClick={toggleDark} className='text-lg text-[#021526] cursor-pointer' /></span>
        }

        <button
          onClick={toDashboard}
          className="bg-gradient-to-r from-purple-500 to-pink-500 dark:bg-[#03346E] font-semibold p-2 mt-4 md:mt-0 rounded-sm text-white"
        >
          DASHBOARD
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
