import React from "react";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import Destinations from "./sections/Destinations";
import Journey from "./sections/Journey";
import Header from "./sections/Header";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-bg dark:bg-dark-five text-primary dark:text-dark-primary font-sans">
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <main className="p-44">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="destinations">
          <Destinations />
        </section>
        <section id="journey">
          <Journey />
        </section>
        <section id="book">
          <div className="text-center py-40 text-h2 font-bold">
            [Componente Agendar Aqui]
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
