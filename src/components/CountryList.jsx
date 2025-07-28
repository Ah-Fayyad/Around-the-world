import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

const CountryList = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {Array.isArray(countries) && countries.length > 0 ? (
        countries.map((country) => (
          <CountryCard
            key={country.name?.official || country.name?.common}
            name={country.name?.common || "Unknown"}
            population={country.population || 0}
            region={country.region || "Unknown"}
            capital={country.capital?.[0] || "N/A"}
            flag={country.flags?.svg || country.flags?.png || ""}
          />
        ))
      ) : (
        <EmptySearch />
      )}
    </div>
  );
};

export default CountryList;
