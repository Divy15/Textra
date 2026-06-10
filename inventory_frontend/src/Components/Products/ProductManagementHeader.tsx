import React from "react";
import { 
  Search, 
  Plus, 
  SlidersHorizontal, 
  Layers, 
  PackageCheck, 
  Tags 
} from "lucide-react";
import { StatCard } from "../CommonComponent/StatCard";

// --- Types ---
export interface FilterState {
  searchQuery: string;
  searchType: "product" | "catalog";
  sortBy: "latest" | "oldest";
  category: "all" | "women" | "men" | "children";
}

interface ProductManagementHeaderProps {
  stats: {
    totalUnique: number;
    totalInventory: number;
    totalCatalog: number;
  };
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onAddNewProduct: () => void;
}


// --- Main Header Component ---
export const ProductManagementHeader: React.FC<ProductManagementHeaderProps> = ({
  stats,
  filters,
  onFilterChange,
  onAddNewProduct,
}) => {
  const updateFilter = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-6 w-full">
      
      {/* 1. Header & Action Trigger */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2">
        <div>
          <h1 className="text-2xl font-bold text-burgundy tracking-tight">Product Inventory</h1>
          <p className="text-sm text-gray-500">Manage, sort, and organize your workshop items and variations.</p>
        </div>
        <button
          onClick={onAddNewProduct}
          className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy/90 text-off-white font-medium text-sm px-5 py-3 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
        >
          <Plus size={18} />
          Add New Product
        </button>
      </div>

      {/* 2. Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Unique Products" 
          count={stats.totalUnique} 
          description="Total non-duplicate product profiles" 
          icon={<PackageCheck size={22} />} 
        />
        <StatCard 
          title="Total Inventory" 
          count={stats.totalInventory} 
          description="Absolute unit count across all duplicates" 
          icon={<Layers size={22} />} 
        />
        <StatCard 
          title="Catalog Products" 
          count={stats.totalCatalog} 
          description="Products grouped with multi-color variants" 
          icon={<Tags size={22} />} 
        />
      </div>

      {/* 3. Filters & Controls Bar */}
      <div className="bg-white p-4 rounded-xl border border-camel/20 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row gap-3">
          
          {/* Dual Search Input Bar */}
          <div className="relative flex-1 flex rounded-lg border border-camel/30 focus-within:border-burgundy overflow-hidden transition-colors">
            <select
              value={filters.searchType}
              onChange={(e) => updateFilter("searchType", e.target.value)}
              className="bg-off-white text-xs font-medium text-gray-700 px-3 border-r border-camel/20 focus:outline-none"
            >
              <option value="product">Product Info</option>
              <option value="catalog">Catalog Info</option>
            </select>
            <div className="absolute left-32 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={16} />
            </div>
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => updateFilter("searchQuery", e.target.value)}
              placeholder={
                filters.searchType === "product" 
                  ? "Search by product ID or name..." 
                  : "Search by catalog ID or name..."
              }
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-transparent focus:outline-none placeholder-gray-400 text-gray-700"
            />
          </div>

          {/* Filtering Dropdowns */}
          <div className="grid grid-cols-2 sm:flex items-center gap-3">
            
            {/* Category Sort Filter */}
            <div className="flex items-center gap-1.5 bg-off-white border border-camel/20 rounded-lg px-3 py-2.5">
              <SlidersHorizontal size={14} className="text-camel" />
              <select
                value={filters.category}
                onChange={(e) => updateFilter("category", e.target.value)}
                className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="women">Women Cloth</option>
                <option value="men">Men Cloth</option>
                <option value="children">Children Cloth</option>
              </select>
            </div>

            {/* Upload Timeline Sort Filter */}
            <div className="flex items-center gap-1.5 bg-off-white border border-camel/20 rounded-lg px-3 py-2.5">
              <select
                value={filters.sortBy}
                onChange={(e) => updateFilter("sortBy", e.target.value)}
                className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer w-full"
              >
                <option value="latest">Latest Uploads</option>
                <option value="oldest">Oldest Inventory</option>
              </select>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};