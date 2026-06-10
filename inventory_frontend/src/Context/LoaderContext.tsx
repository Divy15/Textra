import { createContext, useContext, useState, type ReactNode } from "react";
import { HashLoader } from "react-spinners";

interface LoaderContextType {
  showGlobalLoader: () => void;
  hideGlobalLoader: () => void;
  showComponentLoader: (id: string) => void;
  hideComponentLoader: (id: string) => void;
  isComponentLoading: (id: string) => boolean;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [targetLoaders, setTargetLoaders] = useState<Record<string, boolean>>({});

  const showGlobalLoader = () => setIsLoading(true);
  const hideGlobalLoader = () => setIsLoading(false);

  const showComponentLoader = (id: string) => {
    setTargetLoaders((prev) => ({ ...prev, [id]: true }));
  };

  const hideComponentLoader = (id: string) => {
    setTargetLoaders((prev) => ({ ...prev, [id]: false }));
  };

  const isComponentLoading = (id: string) => !!targetLoaders[id];

  return (
    <LoaderContext.Provider
      value={{
        showGlobalLoader,
        hideGlobalLoader,
        showComponentLoader,
        hideComponentLoader,
        isComponentLoading,
      }}
    >
      {children}

      {/* Full Page Overlay Loader Portaled/Rendered globally */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(253, 251, 247, 0.85)", // off-white with transparency
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999, // Stays on top of everything else
          }}
        >
          <HashLoader color="#6B1D2F" size={60} speedMultiplier={1.2} />
        </div>
      )}
    </LoaderContext.Provider>
  );
};

export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider wrapper");
  }
  return context;
};