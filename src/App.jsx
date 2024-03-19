import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import Layout from "./components/layout/Layout";
import AnimeDetail from "./components/layout/AnimeDetail";
import Pending from "./components/common/Pending";
import GenreList from "./components/categories/GenreList";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main paths */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HelpPage />} />
          <Route path="/article" element={<Pending />} />
          <Route path="/genres" element={<GenreList />} />
          {/* Help paths */}
          <Route path="/help/support" element={<Pending />} />
          <Route path="/help/advertising" element={<Pending />} />
          <Route path="/help/faq" element={<Pending />} />
          <Route path="/help/terms" element={<Pending />} />
          <Route path="/help/privacy" element={<Pending />} />
          <Route path="/help/cookie" element={<Pending />} />
          <Route path="/help/notice-at-collection" element={<Pending />} />
          <Route path="/sitemap" element={<Pending />} />
          <Route path="/animes" element={<Pending />} />
          <Route path="/animes/:id" element={<AnimeDetail />} />
          <Route path="/mangas" element={<Pending />} />
          {/* Error paths */}
          <Route path="*" element={<Pending />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
