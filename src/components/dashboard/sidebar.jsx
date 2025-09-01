import {
  FaCog,
  FaEnvelope,
  FaMoneyBill,
  FaPenSquare,
  FaPowerOff,
  FaQuestionCircle,
  FaUsers,
} from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';
import cancel from '../../assets/svgs/cancel.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef} from 'react';
import dropdown from '../../assets/svgs/forward.svg'
//import ConfirmLogout from './ConfirmLogout';

function Sidebar({openSidebar , setOpenSidebar, setLogout}) {
  const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
  const messageDropdownRef = useRef(null);
  const navigate = useNavigate();

  const links = [
    { id: 1, name: 'Dashboard', route: '/dashboard', icon: FaPenSquare },
    { id: 2, name: 'Message', route: '/dashboard/messages', icon: FaEnvelope }, // dropdown
    { id: 3, name: 'Contacts', route: '/dashboard/contacts', icon: FaMoneyBill },
    { id: 4, name: 'Sms Groups', route: '/dashboard/smsgroups', icon: FaUsers },
    { id: 5, name: 'Sms History', route: '/dashboard/smshistory', icon: FaQuestionCircle },
    { id: 6, name: 'Payments', route: '/dashboard/payments', icon: FaCog },
  ];

  const messageDropdownLinks = [
    { label: "Compose", path: "/dashboard/messages/compose" },
    { label: "Send to Group", path: "/dashboard/messages/sendtogroup" },
  ];

  

  return (
      <section
      className={`
        fixed top-0 left-0 min-h-screen w-64  bg-blue-950 text-white pt-5 z-50 
        transform transition-transform duration-300 ease-in-out
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 
      `}
    >
      <h1 className="text-3xl font-bold mb-6 px-8">SEND IT</h1>
      <ul className="flex flex-col gap-4">
        <img 
          src={cancel} 
          alt=""  
          width={35}
           className='md:hidden cursor-pointer absolute top-6 right-4'
          onClick={() => setOpenSidebar(!openSidebar)}
        />
        {links.map((link) => {
          const Icon = link.icon;


          if (link.name === "Message") {
            return (
              <li key={link.id}
               ref={messageDropdownRef}>
                <button
                  onClick={() => setMessageDropdownOpen(prev => !prev)}
                  className="flex items-center justify-between gap-3 text-lg w-full cursor-pointer hover:bg-blue-800 px-8 py-2 rounded"
                >
                  <span className="flex items-center gap-3">
                    {Icon && <Icon />}
                    {link.name}
                  </span>
                  <span className={`transition-transform ${messageDropdownOpen ? "rotate-90" : ""}`}>
                    <img src={dropdown} alt="" width={25} />
                  </span>
                </button>

                {messageDropdownOpen && (
                  <ul className="mt-1 flex flex-col gap-2">
                    {messageDropdownLinks.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          navigate(item.path);
                          setMessageDropdownOpen(false);
                          setOpenSidebar(false);
                        }}
                        className="cursor-pointer hover:bg-blue-800 px-14 py-1 rounded text-sm"
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }

          
          return (
            <Link
              to={link.route}
              key={link.id}
              onClick={() => setOpenSidebar(!openSidebar)}
              className="flex items-center gap-3 text-lg cursor-pointer hover:bg-blue-800 px-8 py-2 rounded"
            >
              {Icon && <Icon />}
              {link.name}
            </Link>
          );
        })}
      </ul>

      <p
      onClick={() => setLogout(true)}
       className="flex items-center mt-20 gap-3 text-lg cursor-pointer px-8 py-2">
        <FaPowerOff /> Logout
      </p>


    </section>
  );
}

export default Sidebar;
