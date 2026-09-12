import COUNTRIES from "../data/countries";

const CountriesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Countries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {COUNTRIES.map((c) => (
          <div key={c.code} className="card bg-base-100 shadow">
            <div className="card-body">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{c.flag}</span>
                <div>
                  <h2 className="card-title">{c.name}</h2>
                  <p className="text-sm opacity-70">{c.capital}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="badge badge-primary">{c.region}</span>
                <span className="badge">
                  {c.population.toLocaleString()} people
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
