import {
  FaCog,
  FaEnvelope,
  FaMoneyBill,
  FaPenSquare,
  FaPowerOff,
  FaQuestionCircle,
  FaUsers,
} from 'react-icons/fa';

function Sidebar() {
  const links = [
    { id: 1, name: 'Dashboard', route: '/dashboard', icon: FaPenSquare },
    { id: 2, name: 'Message', route: '/dashboard', icon: FaEnvelope },
    { id: 3, name: 'Payments', route: '/dashboard', icon: FaMoneyBill },
    { id: 4, name: 'Sms Groups', route: '/dashboard', icon: FaUsers },
    { id: 5, name: 'Help Center', route: '/dashboard', icon: FaQuestionCircle },
    { id: 6, name: 'Settings', route: '/dashboard', icon: FaCog },
  ];

  return (
    <section className="w-70 min-h-screen pt-5 bg-blue-950 text-white ">
      <h1 className="text-3xl font-bold mb-6 px-8">SEND IT</h1>
      <ul className="flex flex-col gap-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <li
              key={link.id}
              className="flex items-center gap-3 text-lg cursor-pointer hover:bg-blue-800 px-8 py-2 rounded"
            >
              {Icon && <Icon />}
              {link.name}
            </li>
          );
        })}
      </ul>
      <p className='flex items-center mt-20 gap-3 text-lg cursor-pointer  px-8 py-2'><FaPowerOff/>Logout</p>
    </section>
  );
}

export default Sidebar;
