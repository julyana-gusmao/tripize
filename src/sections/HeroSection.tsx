import heroImage from "../assets/mountain.jpg";
import PrimaryButton from "../components/PrimaryButton";

interface HeroSectionProps {
  onBookClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  return (
    <section className="relative w-full h-[500px] sm:h-[650px] md:h-[800px] flex items-center justify-center rounded-xl overflow-hidden">
      <img
        src={heroImage}
        alt="Paris"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-50"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 flex flex-col gap-4 items-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-h1 font-extrabold text-white dark:text-white leading-tight">
          Explore o mundo com a Tripize
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-regular text-white/90 dark:text-white/70 max-w-xl">
          Descubra destinos únicos e crie memórias inesquecíveis com nossas
          experiências de viagem selecionadas.
        </p>
        <PrimaryButton
          className="w-full sm:w-56 bg-secondary text-white dark:text-white"
          text="Agendar Viagem"
          onClick={onBookClick}
        />
      </div>

      <div className="absolute inset-0 bg-black/30 dark:bg-dark.four/50 z-[5]" />
    </section>
  );
};

export default HeroSection;
