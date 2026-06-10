import React, { useState } from "react";
import { 
  X, 
  Plus, 
  Layers, 
  FileText, 
  Settings 
} from "lucide-react";
import { Input } from "../CommonComponent/Input";
import { Select } from "../CommonComponent/Select";
import { NumericInput } from "../CommonComponent/NumericInput";

// --- Form State Structure Interfaces ---
interface ProductVariant {
  id: string;
  nameValue: string; // e.g., "Red", "128GB", "Size M"
  price: string;
  sku: string;
  stock: string;
  images: string[];
}

interface CustomSpecification {
  key: string;   // e.g., "Battery Capacity", "Material", "Author"
  value: string; // e.g., "5000 mAh", "100% Cotton", "J.K. Rowling"
}

// Universal Mock Core Verticals dataset used by our Select component architecture
const CORE_BUSINESS_VERTICALS = [
  { id: "clothing", name: "Apparel & Fabrics" },
  { id: "electronics", name: "Consumer Electronics" },
  { id: "footwear", name: "Footwear & Shoes" },
  { id: "books", name: "Books & Literature" },
  { id: "gadgets", name: "Smart Gadgets & Hardware" }
];

export const AddProductForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // 1. Basic Information
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  // 2. Structural Strategies (Single vs Catalog Groupings)
  const [productStructure, setProductStructure] = useState<"single" | "catalog">("single");
  const [catalogPricingStrategy, setCatalogPricingStrategy] = useState<"flat" | "variable">("flat");
  
  // 3. Pricing & Inventory fallback rules for standalone structures
  const [basePrice, setBasePrice] = useState("");
  const [baseStock, setBaseStock] = useState("");
  const [standaloneImages] = useState<string[]>([]);

  // 4. Dynamic Variation State (The Engine for Amazon-style Child Variants)
  const [variantTypeLabel, setVariantTypeLabel] = useState(""); 
  const [variants, setVariants] = useState<ProductVariant[]>([]);

  // 5. Infinite Business Attribute Engine (Saves any enterprise niche parameters)
  const [customSpecs, setCustomSpecs] = useState<CustomSpecification[]>([]);
  const [newSpecKey, setNewSpecKey] = useState("");
  const [newSpecValue, setNewSpecValue] = useState("");

  // 6. Component Mock Error Tracking State (Passes error strings down into shared modules)
  const [errors] = useState<Record<string, string>>({});

  // --- Handlers ---
  const addVariantField = () => {
    if (!variantTypeLabel) return alert("Please specify what your variants differ by (e.g., Color, Size).");
    const newVariant: ProductVariant = {
      id: Math.random().toString(),
      nameValue: "",
      price: catalogPricingStrategy === "flat" ? basePrice : "",
      sku: "",
      stock: "",
      images: []
    };
    setVariants([...variants, newVariant]);
  };

  const updateVariant = (id: string, key: keyof ProductVariant, val: any) => {
    setVariants(variants.map(v => v.id === id ? { ...v, [key]: val } : v));
  };

  const removeVariant = (id: string) => {
    setVariants(variants.filter(v => v.id !== id));
  };

  const addCustomSpecification = () => {
    if (!newSpecKey || !newSpecValue) return;
    setCustomSpecs([...customSpecs, { key: newSpecKey, value: newSpecValue }]);
    setNewSpecKey("");
    setNewSpecValue("");
  };

  const removeCustomSpecification = (index: number) => {
    setCustomSpecs(customSpecs.filter((_, i) => i !== index));
  };

  const handleFormRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalPayload = {
      productName,
      description,
      category: { main: mainCategory, sub: subCategory },
      structureType: productStructure,
      pricingModel: productStructure === "catalog" ? catalogPricingStrategy : "standard",
      globalAttributes: customSpecs, 
      baseData: productStructure === "single" ? { price: basePrice, stock: baseStock, images: standaloneImages } : null,
      variantsData: productStructure === "catalog" ? { axisLabel: variantTypeLabel, options: variants } : []
    };

    console.log("Structured Marketplace Product Payload Object:", finalPayload);
    alert("Product Registered into System! Check console layout tree for full payload details.");
  };

  return (
    <div className="bg-white rounded-2xl border border-camel/30 shadow-xl max-w-4xl mx-auto overflow-hidden">
      
      {/* Header Bar */}
      <div className="bg-burgundy px-6 py-4 flex items-center justify-between text-off-white">
        <div className="flex items-center gap-2">
          <Layers size={20} className="text-camel" />
          <h2 className="text-lg font-bold tracking-tight">Marketplace Engine Registration Form</h2>
        </div>
        <button onClick={onClose} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors cursor-pointer" type="button">
          <X size={18} />
        </button>
      </div>

      <form onSubmit={handleFormRegistrationSubmit} className="p-6 space-y-8 max-h-[80vh] overflow-y-auto bg-off-white/40 no-scrollbar">
        
        {/* Section 1: Standard Base Details (Reusing Input and Select Components) */}
        <div className="space-y-4 bg-white p-5 rounded-xl border border-camel/10 shadow-sm">
          <h3 className="text-sm font-bold text-burgundy uppercase tracking-wider flex items-center gap-2">
            <FileText size={16} className="text-camel" /> Base Identity Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <div className="md:col-span-2">
              <Input
                name="productName"
                label="Product Profile Title / Name"
                placeholder="e.g., Premium Leather Running Sneakers, Wireless Headphones"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                error={errors.productName}
                required
              />
            </div>
            <div>
              <Select
                name="mainCategory"
                label="Primary Core Vertical"
                placeholder="Select primary category..."
                options={CORE_BUSINESS_VERTICALS}
                optionIdKey="id"
                optionNameKey="name"
                value={mainCategory}
                onChange={(e) => setMainCategory(e.target.value)}
                error={errors.mainCategory}
              />
            </div>
          </div>
          <div>
            <Input
              name="subCategory"
              label="Sub-Category Tag"
              placeholder="e.g., Wireless Audio, T-Shirts, Running Gear"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              error={errors.subCategory}
            />
          </div>
        </div>

        {/* Section 2: Core Inventory Structural Model Strategy */}
        <div className="space-y-4 bg-white p-5 rounded-xl border border-camel/10 shadow-sm">
          <h3 className="text-sm font-bold text-burgundy uppercase tracking-wider flex items-center gap-2">
            <Settings size={16} className="text-camel" /> Catalog Setup Configuration
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setProductStructure("single")}
              className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${productStructure === "single" ? "border-burgundy bg-burgundy/5 ring-1 ring-burgundy" : "border-camel/20 hover:border-camel/50"}`}
            >
              <div className={`p-2 rounded-lg border ${productStructure === "single" ? "bg-burgundy text-white border-transparent" : "bg-off-white text-camel border-camel/10"}`}>
                <Layers size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Standalone Single Product</p>
                <p className="text-xs text-gray-400 mt-0.5">One unique item build with fixed standalone catalog configurations.</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setProductStructure("catalog")}
              className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${productStructure === "catalog" ? "border-burgundy bg-burgundy/5 ring-1 ring-burgundy" : "border-camel/20 hover:border-camel/50"}`}
            >
              <div className={`p-2 rounded-lg border ${productStructure === "catalog" ? "bg-burgundy text-white border-transparent" : "bg-off-white text-camel border-camel/10"}`}>
                <Layers size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Variant Catalog Family</p>
                <p className="text-xs text-gray-400 mt-0.5">Groups multiple configurations under one master name (Colors, Sizes, Specs).</p>
              </div>
            </button>
          </div>

          {productStructure === "catalog" && (
            <div className="bg-off-white/40 p-4 rounded-xl border border-camel/20 space-y-4 animate-fadeIn">
              <label className="text-xs font-bold text-burgundy block uppercase tracking-wide">Catalog Structure Variable Pricing Model</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-700 font-medium cursor-pointer">
                  <input type="radio" checked={catalogPricingStrategy === "flat"} onChange={() => setCatalogPricingStrategy("flat")} className="text-burgundy focus:ring-burgundy" />
                  Single Group Price (Flat Rate Across Variants)
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 font-medium cursor-pointer">
                  <input type="radio" checked={catalogPricingStrategy === "variable"} onChange={() => setCatalogPricingStrategy("variable")} className="text-burgundy focus:ring-burgundy" />
                  Individual Variant Custom Pricing
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Section 3: Conditional Structural Elements (Reusing NumericInput and Input Components) */}
        {productStructure === "single" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-5 rounded-xl border border-camel/10 shadow-sm">
            <NumericInput
              name="basePrice"
              label="Product Price ($)"
              placeholder="e.g., 99"
              value={basePrice}
              onChange={setBasePrice}
              error={errors.basePrice}
              required
            />
            <NumericInput
              name="baseStock"
              label="Total Available Inventory Stock"
              placeholder="e.g., 250"
              value={baseStock}
              onChange={setBaseStock}
              error={errors.baseStock}
              required
            />
          </div>
        ) : (
          <div className="bg-white p-5 rounded-xl border border-camel/10 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h4 className="text-sm font-bold text-burgundy">Catalog Variant Configurations Matrix</h4>
              <button type="button" onClick={addVariantField} className="inline-flex items-center gap-1 text-xs font-medium bg-camel hover:bg-camel/90 text-white px-2.5 py-1.5 rounded-md cursor-pointer transition-all">
                <Plus size={14} /> Add Child Variant Option
              </button>
            </div>

            <div className="max-w-sm">
              <Input
                name="variantTypeLabel"
                label="What attribute differs across this matrix?"
                placeholder="e.g., Color Axis, Fabric Variant, Storage Spec"
                value={variantTypeLabel}
                onChange={(e) => setVariantTypeLabel(e.target.value)}
                error={errors.variantTypeLabel}
              />
            </div>

            {catalogPricingStrategy === "flat" && (
              <div className="max-w-sm bg-off-white/50 p-3 rounded-lg border border-camel/20">
                <NumericInput
                  name="flatCatalogPrice"
                  label="Global Master Product Price ($)"
                  placeholder="e.g., 45"
                  value={basePrice}
                  onChange={setBasePrice}
                  error={errors.basePrice}
                />
              </div>
            )}

            {/* Variant Matrix Form Array map */}
            <div className="space-y-3 pt-2">
              {variants.map((v) => (
                <div key={v.id} className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-start p-4 rounded-xl border border-camel/20 bg-off-white/20 relative">
                  <div className="sm:col-span-2">
                    <Input
                      name={`variant-name-${v.id}`}
                      label={`Variant ${variantTypeLabel || "Value"}`}
                      placeholder="e.g., Ruby Red, 256GB"
                      value={v.nameValue}
                      onChange={(e) => updateVariant(v.id, "nameValue", e.target.value)}
                    />
                  </div>
                  {catalogPricingStrategy === "variable" && (
                    <NumericInput
                      name={`variant-price-${v.id}`}
                      label="Variant Price ($)"
                      placeholder="Price"
                      value={v.price}
                      onChange={(val) => updateVariant(v.id, "price", val)}
                    />
                  )}
                  <NumericInput
                    name={`variant-stock-${v.id}`}
                    label="Stock Count"
                    placeholder="QTY"
                    value={v.stock}
                    onChange={(val) => updateVariant(v.id, "stock", val)}
                  />
                  <div className="flex items-end gap-2 w-full">
                    <div className="flex-1">
                      <Input
                        name={`variant-sku-${v.id}`}
                        label="Sku Tag"
                        placeholder="SKU"
                        value={v.sku}
                        onChange={(e) => updateVariant(v.id, "sku", e.target.value)}
                      />
                    </div>
                    <button type="button" onClick={() => removeVariant(v.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-md mb-0.5 transition-colors cursor-pointer border border-transparent hover:border-red-200">
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Dynamic Cross-Vertical Enterprise Attributes Generator */}
        <div className="space-y-4 bg-white p-5 rounded-xl border border-camel/10 shadow-sm">
          <div>
            <h3 className="text-sm font-bold text-burgundy uppercase tracking-wider flex items-center gap-2">
              <Settings size={16} className="text-camel" /> Custom Product Specification Engine
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">Allows platform elasticity. Add any parameters specific to any category vertical (e.g., Screen Size for Electronics, Author for Books).</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end bg-off-white/40 p-4 rounded-xl border border-camel/20">
            <Input
              name="newSpecKey"
              label="Specification Name"
              placeholder="e.g., Battery Life, Fabric Composition, Pages"
              value={newSpecKey}
              onChange={(e) => setNewSpecKey(e.target.value)}
            />
            <Input
              name="newSpecValue"
              label="Value Parameter"
              placeholder="e.g., 48 Hours, 90% Silk, 400 Pages"
              value={newSpecValue}
              onChange={(e) => setNewSpecValue(e.target.value)}
            />
            <button type="button" onClick={addCustomSpecification} className="bg-camel hover:bg-camel/90 text-white font-medium text-sm py-2 rounded-lg shadow-sm transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 h-9.5 w-full">
              <Plus size={16} /> Inject Custom Spec
            </button>
          </div>

          {/* Render Active dynamic specifications list */}
          {customSpecs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {customSpecs.map((spec, i) => (
                <div key={i} className="flex items-center justify-between text-sm px-3 py-2 rounded-lg bg-off-white border border-camel/20 animate-fadeIn">
                  <span className="font-medium text-gray-600">{spec.key}: <span className="text-burgundy font-bold">{spec.value}</span></span>
                  <button type="button" onClick={() => removeCustomSpecification(i)} className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 5: Standard Detailed Context Block */}
        <div className="space-y-4 bg-white p-5 rounded-xl border border-camel/10 shadow-sm">
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-medium text-gray-700">Delivery Description Info</label>
            <textarea 
              rows={4} 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide clean transactional information for shipping context, composition parameters, or package handling specifications..."
              className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 shadow-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Form Submission Action Footer */}
        <div className="flex justify-end items-center gap-3 border-t border-gray-100 pt-4">
          <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-medium border border-camel/30 rounded-lg text-gray-600 hover:bg-gray-50 cursor-pointer">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2.5 text-sm font-medium bg-burgundy hover:bg-burgundy/90 text-off-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
            Register Master Profile
          </button>
        </div>

      </form>
    </div>
  );
};