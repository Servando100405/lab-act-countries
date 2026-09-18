import { Link, useParams } from "react-router";
import COUNTRIES from "../data/countries";

const CountryDetailPage = () => {
  const { countryCode } = useParams();
  const country = COUNTRIES.find((c) => c.code === countryCode.toUpperCase());

  if (!country) {
    return (
      <div className="max-w-xl mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold mb-3">Country not found</h1>
        <p className="mb-6">We couldn't find a country with code {countryCode}.</p>
        <Link to="/countries" className="btn btn-primary">
          Back to Countries
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Link to="/countries" className="btn btn-ghost mb-6">
        ← Back to countries
      </Link>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{country.flag}</span>
            <div>
              <p className="text-sm uppercase tracking-wide opacity-70">{country.code}</p>
              <h1 className="text-4xl font-bold">{country.name}</h1>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="stat bg-base-200 rounded-box">
              <div className="stat-title">Capital</div>
              <div className="stat-value text-2xl">{country.capital}</div>
            </div>

            <div className="stat bg-base-200 rounded-box">
              <div className="stat-title">Region</div>
              <div className="stat-value text-2xl">{country.region}</div>
            </div>

            <div className="stat bg-base-200 rounded-box md:col-span-2">
              <div className="stat-title">Population</div>
              <div className="stat-value text-2xl">
                {country.population.toLocaleString()} people
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
