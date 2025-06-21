import { SelectOption } from "@/components/MultiSelectPills/MultiSelectPills";
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "IFMakerSD.com.br",
    type: "web",
    description:
      "Website e blog do laboratório IFMaker do IFSudesteMG campos Santos Dumont.",
    thumbnail:
      "https://github.com/ArthurAssuncao/ifmakersd.com.br/blob/main/screenshots/screenshot-thumb.jpeg?raw=true",
    technologies: [
      "NextJS",
      "Headless CMS",
      "CSS Modules",
      "SASS",
      "Typescript",
    ],
    tags: ["Fullstack", "Responsivo"],
    media: [
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/ifmakersd.com.br/blob/main/screenshots/screenshot-1.jpeg?raw=true",
        alt: "Página inicial",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/ifmakersd.com.br/blob/main/screenshots/screenshot-2-portrait.png?raw=true",
        alt: "Mobile 1",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/ifmakersd.com.br/blob/main/screenshots/screenshot-2-left.png?raw=true",
        alt: "Mobile 2",
      },
      {
        type: "figma",
        url: "https://www.figma.com/design/HdTcs3vOoPCfbuV11PLyyo/lab-if-maker-com-br",
      },
    ],
    figmaUrl:
      "https://www.figma.com/design/HdTcs3vOoPCfbuV11PLyyo/lab-if-maker-com-br",
    githubUrl: "https://github.com/ArthurAssuncao/ifmakersd.com.br",
    siteUrl: "https://ifmakersd-com-br.vercel.app/",
    year: 2022,
  },
  {
    id: "2",
    title: "pomoTraining",
    type: "web",
    description:
      "Aplicação web que é um pomodoro com exercícios físicos nos intervalos",
    thumbnail:
      "https://github.com/ArthurAssuncao/pomoTraining/blob/main/docs/screenshots/thumbnail.png?raw=true",
    technologies: ["NextJS", "CSS Modules", "SASS", "Typescript"],
    tags: ["Frontend", "Responsivo"],
    media: [
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/pomoTraining/blob/main/docs/screenshots/mobile.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/pomoTraining/blob/main/docs/screenshots/mobile-home.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/pomoTraining/blob/main/docs/screenshots/mobile-home-dark.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/pomoTraining/blob/main/docs/screenshots/tablet-login.png?raw=true",
      },

      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/pomoTraining/blob/main/docs/screenshots/tablet-home.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/pomoTraining/blob/main/docs/screenshots/tablet-home-dark.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/pomoTraining/blob/main/docs/screenshots/tablet-config.png?raw=true",
      },
    ],

    siteUrl: "https://pomotraining.vercel.app/",
    githubUrl: "https://github.com/ArthurAssuncao/pomoTraining",
    year: 2021,
  },
  {
    id: "3",
    title: "ArthurAssuncao.com",
    type: "web",
    description: "Meu site pessoal",
    thumbnail:
      "https://github.com/ArthurAssuncao/ArthurAssuncao.com-2021/blob/main/screenshots/thumbnail.png?raw=true",
    technologies: ["NextJS", "CSS Modules", "SASS", "Typescript", "API Rest"],
    tags: ["Frontend", "Responsivo"],
    media: [
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/ArthurAssuncao.com-2021/blob/main/screenshots/screenshot-2-mobile.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/ArthurAssuncao.com-2021/blob/main/screenshots/screenshot-1.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/ArthurAssuncao.com-2021/blob/main/screenshots/screenshot-3.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/ArthurAssuncao.com-2021/blob/main/screenshots/screenshot-4.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/ArthurAssuncao.com-2021/blob/main/screenshots/screenshot-5.png?raw=true",
      },
      {
        type: "youtube-embed",
        url: "https://www.youtube.com/embed/qZSvZl28AS4?si=1ibmiIYGqiEPeIOV",
      },
      {
        type: "figma",
        url: "https://www.figma.com/proto/4aCZmQoMDQBVLM30oBZHZr/ArthurAssuncao.com-2021",
      },
    ],

    siteUrl: "https://arthurassuncao.com/",
    githubUrl: "https://github.com/ArthurAssuncao/ArthurAssuncao.com-2021",
    figmaUrl:
      "https://www.figma.com/design/4aCZmQoMDQBVLM30oBZHZr/ArthurAssuncao.com-2021",
    year: 2021,
  },
  {
    id: "4",
    title: "TrainRailHackathonBrasil.com.br",
    type: "web",
    description:
      "Site para o TrainRail Hackathon Brasil. Evento foi cancelado.",
    thumbnail:
      "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/thumbnail.png?raw=true",
    technologies: ["NextJS", "CSS Modules", "SASS", "Typescript", "i18n"],
    tags: ["Frontend", "Responsivo"],
    media: [
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/desktop-1.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/desktop-1-mockup.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/desktop-2.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/desktop-2-mockup.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/desktop-3.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/desktop-4.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/mobile-1.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/mobile-1-min.gif?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/mobile-1-mockup.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/mobile-2.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/mobile-2-mockup.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/mobile-full-min.gif?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/blob/main/docs/screenshots/thumbnail.png?raw=true",
      },
      {
        type: "figma",
        url: "https://www.figma.com/design/wlZvFPbGD0nzGZE4bcCWwB/trailrail-hackathon-design?node-id=0-1&p=f&t=NdOTgzjeUTpFNh9Y-0",
      },
    ],
    siteUrl: "https://trainrailhackathon.vercel.app",
    githubUrl:
      "https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br",
    figmaUrl:
      "https://www.figma.com/design/wlZvFPbGD0nzGZE4bcCWwB/trailrail-hackathon-design?node-id=0-1&p=f&t=NdOTgzjeUTpFNh9Y-0",
    year: 2021,
  },
  {
    id: "5",
    title: "Hello Sundae",
    type: "web",
    description: "Application for order sundae and to use react-testing",
    objectFit: "cover",
    thumbnail:
      "https://github.com/ArthurAssuncao/HelloSundae/blob/main/docs/screenshots/thumbnail.png?raw=true",
    technologies: [
      "NextJS",
      "CSS Modules",
      "SASS",
      "Typescript",
      "React Testing Library",
      "Jest",
    ],
    tags: ["Frontend", "Teste unitário", "Teste funcionais"],
    media: [
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/HelloSundae/blob/main/docs/screenshots/mobile-order.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/HelloSundae/blob/main/docs/screenshots/mobile-order-finished.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/HelloSundae/blob/main/docs/screenshots/mobile-order-summary.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/HelloSundae/blob/main/docs/screenshots/order-finished-old-new.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/HelloSundae/blob/main/docs/screenshots/order-old-new.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/HelloSundae/blob/main/docs/screenshots/order-summary-old-new.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/HelloSundae/blob/main/docs/screenshots/original-order-design.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/HelloSundae/blob/main/docs/screenshots/original-order-finished-design.png?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/HelloSundae/blob/main/docs/screenshots/original-order-summary-design.png?raw=true",
      },
      {
        type: "figma",
        url: "https://www.figma.com/design/wlZvFPbGD0nzGZE4bcCWwB/trailrail-hackathon-design?node-id=0-1&p=f&t=NdOTgzjeUTpFNh9Y-0",
      },
    ],
    siteUrl: "https://hellosundae.vercel.app/",
    githubUrl: "https://github.com/ArthurAssuncao/HelloSundae",
    figmaUrl: "https://www.figma.com/design/kInL8G1rnGhS3ZhHyoOltz/HelloSundae",
    year: 2022,
  },
  {
    id: "6",
    title: "Calculadora de micro e macronutrientes",
    type: "web",
    description: "Calculadora de nutrientes baseada na tabela TBCA",
    thumbnail:
      "https://github.com/ArthurAssuncao/CalculadoraNutrientes/blob/main/diet_calculated_nutrients-perc.png?raw=true",
    technologies: ["Python", "Crawler"],
    tags: ["Crawler"],
    media: [
      {
        type: "image",
        url: "https://github.com/ArthurAssuncao/CalculadoraNutrientes/blob/main/diet_calculated_nutrients-perc.png?raw=true",
      },
    ],
    githubUrl: "https://github.com/ArthurAssuncao/CalculadoraNutrientes",
    year: 2022,
  },
  // Adicione mais projetos...
];

projects.sort((a, b) => b.year - a.year);

export const generateTechnologiesOptionsFromProjects = (
  projectsData = projects
): SelectOption[] => {
  const technologies: SelectOption[] = [];

  technologies.push({ value: "all", label: "Todas tecnologias" });

  projectsData.forEach((project) => {
    project.technologies.forEach((technology: string) => {
      if (
        !technologies.find(
          (t) => formatValue(t.value) === formatValue(technology)
        )
      ) {
        technologies.push({
          value: formatValue(technology),
          label: technology,
        });
        console.log(technologies);
      }
    });
  });
  return technologies;
};

export const generateTypeOptionsFromProjects = (
  projectsData = projects
): SelectOption[] => {
  const types: SelectOption[] = [];

  types.push({ value: "all", label: "Todos tipos" });

  projectsData.forEach((project) => {
    const type = project.type;
    if (!types.find((t) => formatValue(t.value) === formatValue(type))) {
      types.push({
        value: formatValue(type),
        label: type,
      });
    }
  });
  return types;
};

export const formatValue = (value: string) => {
  return value.replaceAll("-", " ").replaceAll("_", " ");
};
