import { Globe2, CalendarRange, Users2 } from "lucide-react";

export const features = [
  {
    icon: <Globe2 className="w-8 h-8 text-primary dark:text-dark-secondary" />,
    title: "Destinos com curadoria especializada",
    description:
      "Nossa equipe de especialistas em viagens seleciona cuidadosamente os destinos mais cativantes ao redor do mundo.",
  },
  {
    icon: (
      <CalendarRange className="w-8 h-8 text-primary dark:text-dark-secondary" />
    ),
    title: "Datas de viagem flexíveis",
    description:
      "Escolha as datas da sua viagem e personalize seu itinerário para adequá-lo à sua agenda.",
  },
  {
    icon: <Users2 className="w-8 h-8 text-primary dark:text-dark-secondary" />,
    title: "Aventuras em pequenos grupos",
    description:
      "Desfrute de uma experiência de viagem mais íntima e envolvente com nossos passeios para pequenos grupos.",
  },
];
