import React, { useState, useEffect, useRef, type ChangeEvent, type KeyboardEvent } from "react";

// Define a flexible interface for suggestion items so you can pass complex objects
export interface SuggestionItem {
  id: string | number;
  label: string;
  [key: string]: any; // Allows you to pass any other metadata (e.g., icons, categories)
}

interface SearchInputProps {
  name: string;
  placeholder?: string;
  suggestions: SuggestionItem[];
  width?: string;
  onSearchSubmit?: (value: string) => void;
  onSuggestionSelect?: (item: SuggestionItem) => void;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  name,
  placeholder = "Search...",
  suggestions = [],
  width = "w-full",
  onSearchSubmit,
  onSuggestionSelect,
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<SuggestionItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Filter suggestions dynamically based on query change
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredSuggestions([]);
      return;
    }

    const filtered = suggestions.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }, [query, suggestions]);

  // 2. Close dropdown automatically if user clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setActiveSuggestionIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Typing Changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowDropdown(true);
    setActiveSuggestionIndex(-1);
  };

  // Handle Selecting a Suggestion from the list
  const handleItemClick = (item: SuggestionItem) => {
    setQuery(item.label);
    setShowDropdown(false);
    setActiveSuggestionIndex(-1);
    if (onSuggestionSelect) onSuggestionSelect(item);
  };

  // 3. Dynamic Keyboard Accessibility Navigation (Up, Down, Enter, Escape)
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || filteredSuggestions.length === 0) {
      if (e.key === "Enter" && onSearchSubmit) {
        onSearchSubmit(query);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveSuggestionIndex((prevIndex) =>
          prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : 0
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setActiveSuggestionIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredSuggestions.length - 1
        );
        break;

      case "Enter":
        e.preventDefault();
        if (activeSuggestionIndex >= 0 && activeSuggestionIndex < filteredSuggestions.length) {
          handleItemClick(filteredSuggestions[activeSuggestionIndex]);
        } else if (onSearchSubmit) {
          onSearchSubmit(query);
          setShowDropdown(false);
        }
        break;

      case "Escape":
        setShowDropdown(false);
        setActiveSuggestionIndex(-1);
        break;
    }
  };

  return (
    <div ref={containerRef} className={`relative flex flex-col gap-1.5 ${width} ${className}`}>
      {/* Search Input Wrapper */}
      <div className="relative flex items-center">
        <input
          type="text"
          name={name}
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowDropdown(true)}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-sm text-gray-900 shadow-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        {/* Absolute Search Icon Button */}
        <button
          type="button"
          onClick={() => onSearchSubmit && onSearchSubmit(query)}
          className="absolute right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* 4. Dynamic Suggestion Dropdown List Overlay */}
      {showDropdown && filteredSuggestions.length > 0 && (
        <ul className="absolute top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {filteredSuggestions.map((item, index) => {
            const isActive = index === activeSuggestionIndex;
            return (
              <li
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`cursor-pointer select-none px-4 py-2 transition-colors duration-150 ${
                  isActive ? "bg-blue-600 text-white" : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};