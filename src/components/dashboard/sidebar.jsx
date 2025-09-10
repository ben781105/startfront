import {
  FaAddressBook,
  FaEnvelope,
  FaListAlt,
  FaMoneyBill,
  FaPenSquare,
  FaDoorOpen,
  FaUsers,
  FaTimes,
  FaAngleRight
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef} from 'react';


function Sidebar({openSidebar , setOpenSidebar, setLogout}) {
  const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
  const messageDropdownRef = useRef(null);
  const navigate = useNavigate();

  const links = [
    { id: 1, name: 'Dashboard', route: '/dashboard', icon: FaPenSquare },
    { id: 2, name: 'Message', route: '/dashboard/messages', icon: FaEnvelope }, // dropdown
    { id: 3, name: 'Contacts', route: '/dashboard/contacts', icon: FaAddressBook },
    { id: 4, name: 'Sms Groups', route: '/dashboard/smsgroups', icon: FaUsers },
    { id: 5, name: 'Sms History', route: '/dashboard/smshistory', icon: FaListAlt},
    { id: 6, name: 'Payments', route: '/dashboard/payments', icon: FaMoneyBill },
  ];

  const messageDropdownLinks = [
    { label: "Compose", path: "/dashboard/messages/compose" },
    { label: "Send to Group", path: "/dashboard/messages/sendtogroup" },
  ];

  

  return (
      <section
      className={`
        fixed top-0 left-0 min-h-screen w-64 bg-[#090325] text-white pt-5 z-50 
        transform transition-transform duration-300 ease-in-out
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 
      `}
    >
      <h1 className="text-3xl font-bold mb-6 px-8">SEND IT</h1>
      <ul className="flex flex-col gap-4">
        <FaTimes 
          
          alt=""  
          size={33}
           className='md:hidden cursor-pointer absolute top-5 right-4'
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
                  className="flex items-center justify-between gap-3 text-lg w-full cursor-pointer dark:hover:bg-[#151030]  px-8 py-2 rounded"
                >
                  <span className="flex items-center gap-3">
                    {Icon && <Icon />}
                    {link.name}
                  </span>
                  <span className={`transition-transform ${messageDropdownOpen ? "rotate-90" : ""}`}>
                    <FaAngleRight alt="dropdown" width={25} />
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
                        className="cursor-pointer dark:hover:bg-[#151030] px-14 py-2 rounded text-sm"
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
              className="flex items-center gap-3 text-lg cursor-pointer dark:hover:bg-[#151030]  px-8 py-2 rounded"
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
        <FaDoorOpen /> Logout
      </p>


    </section>
  );
}

export default Sidebar;
