export type SelectOption = { value: string; label: string };

interface MultiSelectPillsProps {
  activeFilters: string[];
  onFilterChange: (filters: string[]) => void;
  options: SelectOption[];
}

const MultiSelectPills = ({
  activeFilters,
  options,
  // onFilterChange,
  onFilterChange,
}: MultiSelectPillsProps) => {
  const handleSelect = (value: string) => {
    if (value === "all") {
      // Se selecionar "Todos", remove todas as outras seleções
      onFilterChange(["all"]);
    } else {
      // Remove "Todos" se estiver selecionado
      let newFilters = activeFilters.filter((filter) => filter !== "all");

      if (newFilters.includes(value)) {
        // Se já está selecionado, remove
        newFilters = newFilters.filter((filter) => filter !== value);

        // Se não sobrou nenhum, seleciona "Todos"
        if (newFilters.length === 0) {
          newFilters = ["all"];
        }
      } else {
        // Se não está selecionado, adiciona
        newFilters = [...newFilters, value];
      }

      onFilterChange(newFilters);
    }

    // onFilterChange(newFilters); // Sua função callback aqui
  };

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {options.map((option) => {
          const isSelected = activeFilters.includes(option.value);

          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 
                         transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300/50 hover:cursor-pointer
                         ${
                           isSelected
                             ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-xl"
                             : "bg-white/70 text-gray-700 hover:bg-green-50 border border-green-200 hover:border-green-300"
                         }`}
            >
              {option.label}
              {isSelected &&
                activeFilters.length > 1 &&
                option.value !== "all" && (
                  <span className="ml-2 text-sm opacity-80">✓</span>
                )}
            </button>
          );
        })}
      </div>

      {/* Contador de seleções */}
      {activeFilters.length > 1 && !activeFilters.includes("all") && (
        <div className="mt-3 text-sm text-gray-600">
          {activeFilters.length}{" "}
          {activeFilters.length === 1 ? "filtro" : "filtros"} selecionado
          {activeFilters.length === 1 ? "" : "s"}
        </div>
      )}

      {/* Botão para limpar seleções */}
      {activeFilters.length > 1 || !activeFilters.includes("all") ? (
        <button
          onClick={() => onFilterChange(["all"])}
          className="mt-3 text-sm text-white hover:text-green-700 underline transition-colors duration-200 hover:cursor-pointer"
        >
          Limpar filtros
        </button>
      ) : null}
    </div>
  );
};

export { MultiSelectPills };
