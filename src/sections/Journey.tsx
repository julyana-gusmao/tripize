import { features } from "../data/journey";

const Journey = () => {
  return (
    <section className="p-6 dark:bg-dark.five text-dark dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-h3 font-bold text-dark.four dark:text-dark.secondary mb-10">
          Por que escolher a Tripize?
        </h3>

        <h2 className="text-h2 font-extrabold mb-4">
          Sua jornada perfeitamente planejada.
        </h2>

        <p className="text-base text-dark.four dark:text-dark.secondary max-w-2xl mx-auto mb-12">
          Somos especializados em criar experiências de viagem personalizadas
          que atendem às suas preferências e interesses únicos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 dark:border-dark-third dark:bg-dark-four bg-white dark:bg-dark.four p-6 text-left shadow-sm hover:shadow-md transition hover:scale-105"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-h3 font-bold mb-2">{item.title}</h4>
              <p className="text-base text-dark-four dark:text-dark-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Journey;
