import { FaFacebook } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <div className="flex gap-4 mb-4 items-center">
              <img
                src={logo}
                className="w-12 h-12 bg-white rounded-full"
                alt="PlantPal Logo"
              />
              <h2 className="text-2xl font-bold">PlantPal</h2>
            </div>
            <p className="text-gray-400">
              Empowering connections through innovative solutions. Explore our
              world of technology and creativity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: tamzidmolla.dev@gmail.com</p>
            <p className="text-gray-400">Phone: +8801864959549</p>
            <p className="text-gray-400">
              Address: Shohid Mishru Shorok, Jhenaidah, Bangladesh
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com/monhara.pakhi.549668"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </Link>
            </div>
            
          </div>
          <div className="mt-4">
              <h4 className="text-md font-medium mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/allPlants" className="text-gray-400 hover:text-white">
                    All Plants
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} PlantPal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;