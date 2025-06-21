import Head from "next/head";
import { useState } from "react";

import { HeroSection } from "@/components/HeroSection";
import { MultiSelectPills } from "@/components/MultiSelectPills";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import {
  generateTechnologiesOptionsFromProjects,
  generateTypeOptionsFromProjects,
  projects,
} from "@/data/projects";
import type { Project } from "@/types";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFiltersTech, setActiveFiltersTech] = useState<string[]>(["all"]);
  const optionsTech = generateTechnologiesOptionsFromProjects();

  const [activeFiltersType, setActiveFiltersType] = useState<string[]>(["all"]);
  const optionsType = generateTypeOptionsFromProjects();

  const filteredProjects = projects.filter((project) => {
    if (process.env.NODE_ENV === "development") {
      console.log("filtros", activeFiltersTech, activeFiltersType);
    }

    if (
      activeFiltersTech.includes("all") &&
      activeFiltersType.includes("all")
    ) {
      return true;
    }
    if (activeFiltersType.includes("all")) {
      return activeFiltersTech.some((tech) =>
        project.technologies.includes(tech)
      );
    }
    if (activeFiltersTech.includes("all")) {
      return activeFiltersType.includes(project.type);
    }
    return (
      activeFiltersTech.some((tech) => project.technologies.includes(tech)) &&
      activeFiltersType.includes(project.type)
    );
  });

  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Conteúdo Principal */}
        <main className="flex relative bg-gradient-to-r from-green-500 to-blue-600 min-h-screen w-full justify-center">
          {/* Efeito de partículas opcional */}
          <div className="absolute inset-0 overflow-hidden ">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full opacity-10"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${
                    Math.random() * 10 + 10
                  }s linear infinite`,
                }}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 m-6 z-1">
            <HeroSection />

            <div className="mb-6 ">
              <MultiSelectPills
                activeFilters={activeFiltersType}
                onFilterChange={setActiveFiltersType}
                options={optionsType}
              />
              <MultiSelectPills
                activeFilters={activeFiltersTech}
                onFilterChange={setActiveFiltersTech}
                options={optionsTech}
              />
            </div>

            <div className="flex container">
              <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </>
  );
}
