import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

const App = () => {
  // TODO: replace this with a real route table using react-router.
  // For now the app only shows HomePage. Clicking nav links causes a full
  // page reload (or a 404) because there's no client-side routing yet.
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default App;
