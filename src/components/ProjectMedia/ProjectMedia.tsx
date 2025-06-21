import Image from "next/image";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

interface ProjectMediaProps {
  media: { type: string; url: string };
  title: string;
  index: number;
}

const ProjectMedia = ({ media, title, index }: ProjectMediaProps) => {
  const [loadedFigma, setLoadedFigma] = useState(false);
  if (media.type === "image") {
    return (
      <Image
        src={media.url}
        alt={`${title} - ${index + 1}`}
        width={800}
        height={600}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={index === 0} // Prioriza a primeira imagem
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        quality={85}
        className="w-full h-auto max-h-[60vh] object-contain"
      />
    );
  }
  if (media.type === "video") {
    return (
      <video controls className="w-full">
        <source src={media.url} type="video/mp4" />
      </video>
    );
  }
  if (media.type === "youtube-embed") {
    return (
      <iframe
        width="100%"
        height="500"
        src={media.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    );
  }
  if (media.type === "figma") {
    return (
      <div
        className={`w-full h-[600px] rounded-lg overflow-hidden shadow-xl flex items-center justify-center ${
          loadedFigma ? "" : "bg-gray-800"
        }`}
      >
        {!loadedFigma && <PacmanLoader color="#fdff00" />}
        <iframe
          className={`w-full h-full border-none ${loadedFigma ? "" : "hidden"}`}
          src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
            media.url
          )}`}
          onLoad={() => setLoadedFigma(true)}
          allowFullScreen
        />
      </div>
    );
  }
};

export { ProjectMedia };
