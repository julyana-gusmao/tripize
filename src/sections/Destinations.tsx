import PrimaryButton from "../components/PrimaryButton";
import { destinations } from "../data/destinations";

const Destinations = () => {
  return (
    <section className="py-12 px-6 text-dark text-text">
      <h2 className="text-h2 font-extrabold mb-8 dark:text-white">
        Principais Destinos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white dark:bg-dark.four rounded-xl overflow-hidden shadow-md dark:bg-dark-four"
          >
            <img
              src={dest.image}
              alt={dest.tag}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <h3 className="text-h3 font-bold mb-2 dark:text-white">
                {dest.tag}
              </h3>
              <p className="text-base font-regular text-gray-700 mb-4 dark:text-dark-secondary">
                {dest.description}
              </p>
              <PrimaryButton text="Agendar Agora" />
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Destinations;
