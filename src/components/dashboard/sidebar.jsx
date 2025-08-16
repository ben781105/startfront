import {
  FaCog,
  FaEnvelope,
  FaMoneyBill,
  FaPenSquare,
  FaPowerOff,
  FaQuestionCircle,
  FaUsers,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import dropdown from '../../assets/svgs/forward.svg'

function Sidebar() {
  const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
  const messageDropdownRef = useRef(null);
  const navigate = useNavigate();

  const links = [
    { id: 1, name: 'Dashboard', route: '/dashboard', icon: FaPenSquare },
    { id: 2, name: 'Message', route: '/dashboard/messages', icon: FaEnvelope }, // dropdown
    { id: 3, name: 'Payments', route: '/dashboard/payments', icon: FaMoneyBill },
    { id: 4, name: 'Sms Groups', route: '/dashboard/smsgroups', icon: FaUsers },
    { id: 5, name: 'Sms History', route: '/dashboard/smshistory', icon: FaQuestionCircle },
    { id: 6, name: 'Settings', route: '/dashboard/settings', icon: FaCog },
  ];

  const messageDropdownLinks = [
    { label: "Compose", path: "/dashboard/messages/compose" },
    { label: "Send to Group", path: "/dashboard/messages/sendtogroup" },
  ];

  
  useEffect(() => {
    function handleClickOutside(e) {
      if (messageDropdownRef.current && !messageDropdownRef.current.contains(e.target)) {
        setMessageDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="w-70 min-h-screen pt-5 bg-blue-950 text-white">
      <h1 className="text-3xl font-bold mb-6 px-8">SEND IT</h1>
      <ul className="flex flex-col gap-4">
        {links.map((link) => {
          const Icon = link.icon;


          if (link.name === "Message") {
            return (
              <li key={link.id} ref={messageDropdownRef}>
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
              className="flex items-center gap-3 text-lg cursor-pointer hover:bg-blue-800 px-8 py-2 rounded"
            >
              {Icon && <Icon />}
              {link.name}
            </Link>
          );
        })}
      </ul>

      <p className="flex items-center mt-20 gap-3 text-lg cursor-pointer px-8 py-2">
        <FaPowerOff /> Logout
      </p>
    </section>
  );
}

export default Sidebar;
