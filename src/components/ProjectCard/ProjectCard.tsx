import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
// import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className=" bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative flex aspect-video w-full h-full">
        <Image
          src={
            imageError
              ? `https://placehold.co/300x200?text=${encodeURIComponent(
                  project.title
                )}`
              : project.thumbnail
          }
          alt={project.title}
          fill={true}
          // style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          quality={75}
          className="object-cover "
          onError={() => {
            setImageError(true);
          }}
        />
        <div className="relative w-full inset-0 items-end flex ">
          <h3
            className={`text-gray-800 bg-white w-full text-sm lg:text-lg font-bold text-center p-1 transition-all absolute ${
              !isHover ? "bottom-[-72]" : "bottom-0"
            } min-h-[36] `}
          >
            {project.title}
          </h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
