import React from "react";
import { Link } from "react-scroll";
import { Sun, Moon } from "lucide-react";
import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";
interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const navItems = [
    { name: "Início", to: "hero" },
    { name: "Destinos", to: "destinations" },
    { name: "História", to: "journey" },
  ];

  return (
    <header className="bg-bg dark:bg-dark-four shadow-xl w-full fixed z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img
          src={darkMode ? logoWhite : logoBlack}
          alt="Logo Tripize"
          className="w-32"
        />

        <nav className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-dark dark:text-white hover:text-primary dark:hover:text-primary transition font-medium"
            >
              {item.name}
            </Link>
          ))}

          <Link to="book" smooth duration={500} offset={-80}>
            <button className="ml-4 bg-primary text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition">
              Agendar Agora
            </button>
          </Link>

          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-dark.third text-dark dark:text-white hover:scale-105 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-black" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
