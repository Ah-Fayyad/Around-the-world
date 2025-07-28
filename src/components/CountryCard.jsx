import { Link } from "react-router-dom";

const CountryCard = ({ name, population, region, capital, flag }) => {
  // slugify country name for URL
  const countrySlug = name?.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/${countrySlug}`}>
      <div className="h-full rounded bg-gray-50 p-3 pb-9 shadow-md dark:bg-gray-800 lg:w-[264px]">
        <img
          className="w-full h-40 mb-4 rounded-md"
          src={flag}
          alt={`${name} flag`}
          loading="lazy"
        />
        <h2 className="mb-4 ml-3 text-lg font-extrabold">{name}</h2>
        <div className="flex flex-col gap-2 ml-3">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">{population.toLocaleString() || "N/A"}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{region || "N/A"}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{capital || "N/A"}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
