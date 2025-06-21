import { ProjectType } from "@/types";

interface FilterBarProps {
  activeFilter: ProjectType;
  onFilterChange: (filter: ProjectType) => void;
}

const filters: { id: ProjectType; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "Design" },
];

export const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex overflow-x-auto scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 mr-2 rounded-full whitespace-nowrap transition-colors ${
              activeFilter === filter.id
                ? "bg-green-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};
