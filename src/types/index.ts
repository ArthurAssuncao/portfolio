export type ProjectType = "all" | "web" | "mobile" | "design";

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  description: string;
  thumbnail: string;
  technologies: string[];
  tags: string[];
  media: {
    type: "image" | "video" | "figma" | "youtube-embed";
    url: string;
    alt?: string;
  }[];
  githubUrl?: string;
  figmaUrl?: string;
  siteUrl?: string;
  year: number;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}
