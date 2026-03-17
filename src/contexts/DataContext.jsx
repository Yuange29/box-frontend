import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

import { LoadingContext } from "./LoadingContext";

import { getCategories } from "../services/category.service";
import { getFees } from "../services/fee.service";

const DataContext = createContext();

function DataProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [fees, setFees] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [loadingFees, setLoadingFees] = useState(false);
  const [loadDataError, setloadDataError] = useState("");

  const { setLoadingData } = useContext(LoadingContext);

  useEffect(() => {
    if (!loadingCategories) return;
    const fetchCategories = async () => {
      setLoadingData(true);
      setloadDataError("");
      try {
        const response = await getCategories();
        setCategories(response.data.data);
      } catch (err) {
        setloadDataError(err.response?.data?.message);
      } finally {
        setLoadingData(false);
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, [loadingCategories]);

  useEffect(() => {
    if (!loadingFees) return;
    const fetchFees = async () => {
      setLoadingData(true);
      setloadDataError("");
      try {
        const response = await getFees();
        setFees(response.data.data);
      } catch (err) {
        setloadDataError(err.response?.data?.message);
      } finally {
        setLoadingData(false);
        setLoadingFees(false);
      }
    };

    fetchFees();
  }, [loadingFees]);

  return (
    <DataContext.Provider
      value={{
        categories,
        setCategories,
        fees,
        setFees,
        loadingCategories,
        setLoadingCategories,
        loadingFees,
        setLoadingFees,
        loadDataError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
