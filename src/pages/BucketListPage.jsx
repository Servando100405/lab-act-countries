import COUNTRIES from "../data/countries";

const BUCKET_LIST_CODES = ["JP", "FR", "EG", "AU"];

const BucketListPage = () => {
  const myList = COUNTRIES.filter((c) => BUCKET_LIST_CODES.includes(c.code));

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Bucket List</h1>
      <p className="mb-4 opacity-70">Countries I want to visit someday.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myList.map((c) => (
          <div key={c.code} className="card bg-base-100 shadow">
            <div className="card-body flex-row items-center gap-4">
              <span className="text-5xl">{c.flag}</span>
              <div>
                <h2 className="card-title">{c.name}</h2>
                <p className="text-sm opacity-70">Capital: {c.capital}</p>
                <span className="badge badge-primary mt-1">{c.region}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BucketListPage;
