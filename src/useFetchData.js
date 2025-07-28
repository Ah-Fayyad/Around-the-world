import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,subregion,tld,currencies,languages",
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setResult(data);
        setFilteredCountries(data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    result,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    isError,
  };
};
