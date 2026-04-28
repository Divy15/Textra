"use client";
import { useState, useEffect, useRef } from "react";

interface SearchableInputProps {
  label: string;
  placeholder: string;
  onSelect: (item: any) => void;
  fetchResults: (query: string) => Promise<any[]>;
}

export default function SearchableInput({ label, placeholder, onSelect, fetchResults }: SearchableInputProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const delay = setTimeout(async () => {
      const data = await fetchResults(query);
      setResults(data);
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="relative flex flex-col gap-1.5" ref={containerRef}>
      <label className="text-sm font-semibold text-gray-700 ml-1">{label}</label>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-200 rounded-lg focus:border-green-500 outline-none transition-all"
      />

      {isOpen && results.length > 0 && (
        <ul className="absolute top-[105%] left-0 w-full bg-white border border-gray-100 shadow-xl rounded-xl z-[100] max-h-60 overflow-y-auto py-2">
          {results.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                onSelect(item);
                setQuery(item.display_name); // Set the input to the selected value
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 transition-colors"
            >
              {item.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}