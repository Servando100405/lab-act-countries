import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div className="max-w-2xl mx-auto py-10 space-y-4">
      <h1 className="text-4xl font-bold">About</h1>
      <p>
        <strong>Countries of the World</strong> is a small multi-page React app
        built for Lab Activity 07 of Front-End Development 2.
      </p>
      <p>
        The starter you cloned had no routing at all. In this lab you install
        React Router, wire it into the app, and turn this into a real
        multi-page experience with working navigation and a 404 page.
      </p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
};

export default AboutPage;
