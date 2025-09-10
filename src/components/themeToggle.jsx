import { WiDaySunny, WiMoonAltNew } from 'react-icons/wi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/features/theme/themeSlice';
import { FaCloudMoon} from 'react-icons/fa';
export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const darkMode = theme === 'dark';

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed bottom-6 right-6 w-13 h-13 shadow-[#151030] flex items-center justify-center rounded-full shadow-lg transition-transform bg-gradient-to-tr from-[#239a6d] to-[#b92668] text-white z-50"
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? <WiDaySunny size={28} /> : <FaCloudMoon size={28} className='text-[#050816]'/>}
    </button>
  );
}
