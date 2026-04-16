import { NavLink } from "react-router-dom";
import imageVector from '../assets/Vector.png';
import imageClock from '../assets/Clock.png';
import imageChart from '../assets/ChartLine.png';

const Navbar = () => {
 
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "bg-[#244D3F] text-white px-3 py-2 md:px-4 rounded-md flex items-center gap-2 transition-all"
      : "text-gray-600 hover:text-gray-900 px-3 py-2 md:px-4 flex items-center gap-2 transition-all";

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-15 shadow border-b border-gray-200 bg-white gap-4 md:gap-0 sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-[24px]"><span className="font-extrabold">Keen</span><span className="font-semibold text-[#244D3F]">Keeper</span></h1>

      {/* Nav Links */}
      <div className="flex flex-row items-center gap-2 md:space-x-2">
        <NavLink to="/" className={getLinkClass}>
          <img src={imageVector} alt="vector" className="w-4 h-4 md:w-5 md:h-4"/>
          <span className="hidden sm:inline">Home</span>
        </NavLink>

        <NavLink to="/timeline" className={getLinkClass}>
          <img src={imageClock} alt="clock" className="w-4 h-4 md:w-5 md:h-5"/>
          <span className="hidden sm:inline">Timeline</span>
        </NavLink>

        <NavLink to="/stats" className={getLinkClass}>
          <img src={imageChart} alt="chart" className="w-3 h-3 md:w-4 md:h-4"/>
          <span className="hidden sm:inline">Stats</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;