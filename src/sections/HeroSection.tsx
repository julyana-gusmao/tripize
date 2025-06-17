import heroImage from "../assets/mountain.jpg";
import PrimaryButton from "../components/PrimaryButton";

interface HeroSectionProps {
  onBookClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  return (
    <section className="relative w-full h-[800px] flex items-center justify-center rounded-xl overflow-hidden">
      <img
        src={heroImage}
        alt="Paris"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-50"
      />

      <div className="relative z-10 text-center px-6 flex flex-col gap-4 items-center">
        <h1 className="text-h1 font-extrabold text-white dark:text-white">
          Explore o mundo com a Tripize
        </h1>
        <p className="text-base font-regular text-white/90 dark:text-white/70">
          Descubra destinos únicos e crie memórias inesquecíveis com nossas
          experiências de viagem selecionadas.
        </p>
        <PrimaryButton
          className="w-56 bg-secondary text-white dark:text-white"
          text="Agendar Viagem"
          onClick={onBookClick}
        />
      </div>

      <div className="absolute inset-0 bg-black/30 dark:bg-dark.four/50 z-[5]" />
    </section>
  );
};

export default HeroSection;
