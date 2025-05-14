
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-invest-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <span className="text-invest-accent font-bold text-2xl">Invest</span>
              <span className="font-bold text-2xl">Africa</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/dashboard" className="hover:text-invest-accent transition-colors">Dashboard</Link>
            <Link to="/invest" className="hover:text-invest-accent transition-colors">Invest</Link>
            <Link to="/tax-info" className="hover:text-invest-accent transition-colors">Tax Info</Link>
          </div>
          
          <div>
            <button className="bg-invest-accent hover:bg-opacity-90 text-invest-blue px-4 py-2 rounded-md font-medium transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
