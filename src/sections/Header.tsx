import React, { useState } from "react";
import { Link } from "react-scroll";
import { Sun, Moon, Menu, X } from "lucide-react";
import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", to: "hero" },
    { name: "Destinos", to: "destinations" },
    { name: "História", to: "journey" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-bg dark:bg-dark-four shadow-xl w-full fixed z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img
          src={darkMode ? logoWhite : logoBlack}
          alt="Logo Tripize"
          className="w-32"
        />

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
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
            {darkMode ? <Sun className="w-5 h-5 text-black" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-dark.third text-dark dark:text-white"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-black" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-dark dark:text-white"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-bg dark:bg-dark-four transition-all">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer text-dark dark:text-white hover:text-primary dark:hover:text-primary transition font-medium"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}

            <Link to="book" smooth duration={500} offset={-80} onClick={handleLinkClick}>
              <button className="w-full bg-primary text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition">
                Agendar Agora
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
