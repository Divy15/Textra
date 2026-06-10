import React, { useState } from "react";
import { 
  ProductManagementHeader, 
  type FilterState 
} from "../Components/Products/ProductManagementHeader";
import { AddProductForm } from "../Components/Products/AddProductForm";

export const ProductsPage: React.FC = () => {
  // Mock Stats Data - Hook up to your global store / backend API later
  const [inventoryStats] = useState({
    totalUnique: 142,      // Unique product configurations
    totalInventory: 1250,   // Warehouse total stock count
    totalCatalog: 48        // Total products containing color/size options
  });

  // Controls Search Filter Configurations
  const [currentFilters, setCurrentFilters] = useState<FilterState>({
    searchQuery: "",
    searchType: "product",
    sortBy: "latest",
    category: "all"
  });

  // Track state view management for Modal toggles
  const [isAddingNewProduct, setIsAddingNewProduct] = useState(false);

  const handleFilterUpdate = (newFilters: FilterState) => {
    setCurrentFilters(newFilters);
    // Trigger your backend search queries or local client filters here
    console.log("Current API/Client Parameter State:", newFilters);
  };

  return (
    <div className="min-h-screen bg-off-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Toggle between standard header list view or deep product registration view */}
        {!isAddingNewProduct ? (
          <>
        <ProductManagementHeader 
          stats={inventoryStats}
          filters={currentFilters}
          onFilterChange={handleFilterUpdate}
          onAddNewProduct={() => setIsAddingNewProduct(true)}
        />

        {/* Product Inventory Table / Display List Area goes here */}
        <div className="rounded-xl border border-dashed border-camel/40 p-12 text-center bg-white/50">
          <p className="text-sm text-gray-400">
            Connected Filters: {currentFilters.category} | {currentFilters.sortBy} | Type: {currentFilters.searchType}
          </p>
          <p className="text-xs text-gray-300 mt-1">
            Search text query payload: "{currentFilters.searchQuery}"
          </p>
        </div>
        </>
        ) : (
          <div className="animate-fadeIn">
            <AddProductForm onClose={() => setIsAddingNewProduct(false)} />
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductsPage;