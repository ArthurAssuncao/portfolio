import { Project } from "@/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CheckIcon, FigmaIcon, GitHubIcon, XIcon } from "../Icons";
import { WebIcon } from "../Icons/Icons";
import { ProjectMedia } from "../ProjectMedia/ProjectMedia";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer"
        >
          <XIcon className="w-6 h-6" />
        </button>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>

          {/* Carrossel de Mídia */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            className="mb-1 rounded-lg overflow-hidden"
          >
            {project.media.map((media, index) => (
              <SwiperSlide key={index}>
                <ProjectMedia
                  media={media}
                  title={project.title}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Detalhes Técnicos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Tecnologias</h3>
              <ul className="grid grid-cols-2 gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Links</h3>
              <div className="flex gap-2 flex-wrap">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-500 transition min-w-32 md:min-w-48"
                  >
                    <GitHubIcon className="mr-2" size={24} />
                    <span className="text-md">Ver Código</span>
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition min-w-32 md:min-w-48"
                  >
                    <FigmaIcon className="mr-2" size={24} />
                    <span className="text-md">Protótipo Figma</span>
                  </a>
                )}
                {project.siteUrl && (
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center  px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-500 transition min-w-32 md:min-w-48"
                  >
                    <WebIcon className="mr-2" size={24} />
                    <span className="pt-1 text-md">Sistema online</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
