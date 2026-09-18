import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";
import BucketListPage from "./pages/BucketListPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="countries">
          <Route index element={<CountriesPage />} />
          <Route path=":countryCode" element={<CountryDetailPage />} />
        </Route>
        <Route path="bucket-list" element={<BucketListPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;