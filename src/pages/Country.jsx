import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../useFetchData";
import ShowMessage from "../components/ShowMessage";

const Country = () => {
  const { country } = useParams();
  const { result, isLoading, isError } = useFetchData();

  // Find the country data by matching slugified name
  const countryData = result.find((c) =>
    c.name?.common?.toLowerCase().replace(/\s+/g, "-") === country
  );

  if (isLoading) return <ShowMessage message="Loading country data..." />;
  if (isError) return <ShowMessage message="Something went wrong!" />;
  if (!countryData) return <ShowMessage message="Country not found." />;

  return (
    <div>
      <Link
        className="inline-block p-3 mb-16 bg-white rounded-md md:mb-20"
        to="/"
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.89 3.54L7.07 4.71 3.18 8.6H18.03V10.25H3.18L7.07 14.14 5.89 15.32 0 9.43 5.89 3.54Z"
            fill="#111827"
          />
        </svg>
      </Link>

      <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
        <img
          className="object-contain w-full max-h-96"
          src={countryData.flags?.svg}
          alt={countryData.flags?.alt || `${countryData.name?.common} flag`}
        />

        <div>
          <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
            {countryData.name?.common || "Unknown Country"}
          </h1>

          <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
            <div className="flex flex-col gap-5">
              <p>
                <span className="font-semibold">Population: </span>
                <span className="font-light">
                  {countryData.population?.toLocaleString() || "N/A"}
                </span>
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                <span>{countryData.region || "N/A"}</span>
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                <span>{countryData.subregion || "N/A"}</span>
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                <span>
                  {Array.isArray(countryData.capital)
                    ? countryData.capital.join(", ")
                    : countryData.capital || "N/A"}
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                <span>{countryData.tld?.join(", ") || "N/A"}</span>
              </p>

              <p>
                <span className="font-semibold">Currencies: </span>
                <span className="font-thin">
                  {countryData.currencies
                    ? Object.values(countryData.currencies)
                        .map((curr) => curr.name)
                        .join(", ")
                    : "N/A"}
                </span>
              </p>

              <p>
                <span className="font-semibold">Languages: </span>
                <span className="font-thin">
                  {countryData.languages
                    ? Object.values(countryData.languages).join(", ")
                    : "N/A"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
