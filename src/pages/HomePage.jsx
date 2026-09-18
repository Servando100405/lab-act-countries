import { Link, useNavigate } from "react-router";
import COUNTRIES from "../data/countries";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSurpriseMe = () => {
    const random = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    navigate(`/countries/${random.code}`);
  };

  return (
    <div className="max-w-2xl mx-auto text-center py-10 space-y-4">
      <div className="text-6xl">🌍</div>
      <h1 className="text-4xl font-bold">Countries of the World</h1>
      <p>Browse the world's countries and build your travel bucket list.</p>

      <div className="flex justify-center gap-3 mt-4">
        <Link to="/countries" className="btn btn-primary">
          Browse Countries
        </Link>
        <button onClick={handleSurpriseMe} className="btn btn-secondary">
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default HomePage;
