import React from "react";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import Destinations from "./sections/Destinations";
import Journey from "./sections/Journey";
import Header from "./sections/Header";
import BookNow from "./sections/BookNow";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToBookSection = () => {
    const bookSection = document.getElementById("book");
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-bg dark:bg-dark-five text-primary dark:text-dark-primary font-sans">
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <main className="lg:p-44">
        <section id="hero">
          <HeroSection onBookClick={scrollToBookSection} />
        </section>
        <section id="destinations">
          <Destinations onBookClick={scrollToBookSection} />
        </section>
        <section id="journey">
          <Journey />
        </section>
        <div id="divisor" className="w-[50%] h-0.5 bg-black/40 m-auto mt-20" />
        <section id="book">
          <BookNow />
        </section>
      </main>

      <footer className="text-center h-20">
        <p className="text-sm text-gray-600">
          @Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/julyana-gusmao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Julyana Gusmão
          </a>
        </p>
      </footer>
    </div>
  );
}


export default App;
