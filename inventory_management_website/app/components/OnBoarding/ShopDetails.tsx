"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import FormInput from "@/app/UI/FormInput";
import { OnboardingStepProps } from "@/app/types/onboarding";
import SearchableInput from "@/app/UI/SearchableInput";

const MapPicker = dynamic(() => import("./MapPicker"), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[300px] bg-gray-100 animate-pulse rounded-xl" />
  ),
});

export default function ShopDetails({
  sellerName,
  onNext,
}: OnboardingStepProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      shopName: "",
      city: "",
      state: "",
      pincode: "",
      landmark: "",
      address: "", // Added landmark
      country: "",
      latitude: 23.0225,
      longitude: 72.5714,
    },
  });

  const [selectedLocation, setSelectedLocation] = useState<any | null>(null);

  // Add "landmark" to the watch list
  const watchFields = watch([
    "address",
    "city",
    "state",
    "pincode",
    "landmark",
    "country"
  ]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const { address, landmark, city, pincode, state, country } = getValues();

      // Construct a high-accuracy search string
      // Format: "Landmark, Address, City, Pincode, State, India"
      const queryParts = [landmark, address, city, pincode, state, country];
      const searchString = queryParts.filter(Boolean).join(", ");

      if (searchString.length > 8) {
        handleAutoGeocode(searchString);
      }
    }, 1500);

    return () => clearTimeout(delayDebounce);
  }, [watchFields]);

  const handleAutoGeocode = async (query: string) => {
    try {
      const res = await fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=1`,
      );
      const data = await res.json();
      if (data.features.length > 0) {
        const [lng, lat] = data.features[0].geometry.coordinates;
        setValue("latitude", lat);
        setValue("longitude", lng);
      }
    } catch (err) {
      console.error("Geocoding failed", err);
    }
  };

  const handleFetch = async (query: string) => {
    const res = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5`);
    const data = await res.json();
    return data.features.map((f: any) => ({
      display_name: f.properties.name + ", " + f.properties.city,
      lat: f.geometry.coordinates[1],
      lng: f.geometry.coordinates[0]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 animate-in fade-in duration-700">

      {/* 1. Wrapper for the side-by-side content */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: The Form (Added id here) */}
        <form
          id="shop-details-form"
          onSubmit={handleSubmit(() => onNext())}
          className="flex-1 space-y-5"
        >
          <div className="grid grid-cols-1 gap-4">
            <SearchableInput 
              label="Search Shop City/Area"
              placeholder="Type to search (e.g. Vastrapur, Ahmedabad)"
              fetchResults={handleFetch}
              onSelect={(location) => {
                setSelectedLocation(location);
                setValue("latitude", location.lat);
                setValue("longitude", location.lng);
              }}
            />
          </div>

          {selectedLocation && (
            <div className="space-y-5 animate-in slide-in-from-top-2 duration-500">
              <FormInput
                label="Shop Name"
                {...register("shopName", { required: "Required" })}
                error={errors.shopName?.message}
              />
              <FormInput
                label="Landmark"
                placeholder="e.g. Near HDFC Bank"
                {...register("landmark")}
              />
              <div className="grid grid-cols-1 gap-4">
                <FormInput
                  label="Pincode"
                  {...register("pincode", { required: "Required" })}
                  error={errors.pincode?.message}
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Full Address</label>
                  <textarea
                    {...register("address", { required: "Required" })}
                    rows={3}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-green-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          )}
        </form>

        {/* Right Side: The Map */}
        <div className="lg:w-[400px] w-full">
          <div className="sticky top-10">
            <label className="text-sm font-bold text-gray-600 mb-2 block uppercase tracking-wider">
              Live Preview
            </label>
            <div className="shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
              <MapPicker
                onLocationSelect={(lat, lng) => {
                  setValue("latitude", lat);
                  setValue("longitude", lng);
                }}
                defaultPos={{ lat: watch("latitude"), lng: watch("longitude") }}
              />
            </div>
            
            {/* Coordinates Display */}
            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-between">
              <div className="text-center">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Latitude</p>
                <p className="text-sm font-mono text-green-600">{watch("latitude").toFixed(5)}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Longitude</p>
                <p className="text-sm font-mono text-green-600">{watch("longitude").toFixed(5)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FULL WIDTH BUTTON (Placed outside the flex container) */}
      {selectedLocation && (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <button
            type="submit"
            form="shop-details-form" // This links it back to the form above
            className="w-full py-5 rounded-2xl font-bold text-xl text-white bg-linear-to-r from-red-500 via-yellow-500 via-green-500 to-purple-500 shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all"
          >
            Verify & Save Shop Details
          </button>
          <p className="text-center text-gray-400 text-xs mt-4 italic">
            By clicking save, you confirm the pinpointed location is accurate for deliveries within a 12km radius.
          </p>
        </div>
      )}
    </div>
  );
}
