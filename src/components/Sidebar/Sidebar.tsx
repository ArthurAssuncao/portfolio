import type { Project, ProjectType } from "@/types";
import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { MultiSelectPills } from "../MultiSelectPills";
import { SelectOption } from "../MultiSelectPills/MultiSelectPills";

interface SidebarProps {
  projects: Project[];
  activeFilters: string[];
  setActiveFilters: (filters: string[]) => void;

  onSelectProject: (project: Project) => void;
  options: SelectOption[];
}

export const Sidebar = ({
  projects,
  activeFilters,
  setActiveFilters,
  onSelectProject,
  options,
}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    web: true,
    mobile: true,
    design: true,
  } as Record<ProjectType, boolean>);

  const toggleSection = (section: ProjectType) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const projectTypes: ProjectType[] = ["web", "mobile", "design"];

  return (
    <>
      {/* Botão Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 transition-all"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`flex flex-row
           fixed lg:sticky top-0 left-0 
          w-90 h-screen bg-white backdrop-blur-sm
          overflow-y-auto transition-transform duration-300
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-4 relative h-full">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Filtrar Projetos
          </h2>

          {/* Lista por Categoria */}
          {projectTypes.map((type) => {
            const typeProjects = projects.filter((p) => p.type === type);
            if (typeProjects.length === 0) return null;

            return (
              <div key={type} className="mb-4">
                <button
                  onClick={() => toggleSection(type)}
                  className="flex items-center justify-between w-full p-2 hover:bg-green-500/20 rounded transition-colors text-green-800 dark:text-green-200"
                >
                  <span className="font-medium capitalize">{type}</span>
                  {expandedSections[type] ? (
                    <FiChevronUp className="text-green-600" />
                  ) : (
                    <FiChevronDown className="text-green-600" />
                  )}
                </button>

                {expandedSections[type] && (
                  <ul className="mt-2 space-y-1">
                    {typeProjects.map((project) => (
                      <li key={project.id}>
                        <button
                          onClick={() => onSelectProject(project)}
                          className="w-full text-left p-2 hover:bg-green-500/30 rounded flex items-center transition-colors text-green-900 dark:text-green-100"
                        >
                          <span className="truncate">{project.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}

          {/* Filtro Principal */}
          <div className="mb-6">
            <MultiSelectPills
              activeFilters={activeFilters}
              onFilterChange={setActiveFilters}
              options={options}
            />
          </div>
        </div>
      </aside>
    </>
  );
};
