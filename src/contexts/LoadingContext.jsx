import { createContext, useState } from "react";

const LoadingContext = createContext();

function LoadingProvider({ children }) {
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ loadingPage, loadingData, setLoadingData, setLoadingPage }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingContext, LoadingProvider };
