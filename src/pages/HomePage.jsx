import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="max-w-2xl mx-auto text-center py-10 space-y-4">
      <div className="text-6xl">🌍</div>
      <h1 className="text-4xl font-bold">Countries of the World</h1>
      <p>Browse the world's countries and build your travel bucket list.</p>
      <Link to="/countries" className="btn btn-primary">
        Browse Countries
      </Link>
    </div>
  );
};

export default HomePage;
