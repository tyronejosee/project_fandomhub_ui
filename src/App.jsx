import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./components/layout/Layout";
import Pending from "./components/common/Pending";
import ContentDetail from "./components/content/ContentDetail";
import ButtonScrollTop from "./components/common/ButtonScrollTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import GenrePage from "./pages/GenrePage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main paths */}
          <Route path="/" element={<HomePage />} />
          {/* Anime paths */}
          <Route path="/article" element={<Pending />} />
          <Route path="/genre" element={<GenrePage />} />
          <Route path="/genre/:id" element={<Pending />} />
          <Route path="/anime/:id" element={<ContentDetail />} />
          <Route path="/anime" element={<Pending />} />
          {/* Manga paths */}
          <Route path="/manga" element={<Pending />} />
          <Route path="/manga/:id" element={<Pending />} />
          {/* Help paths */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/advertising" element={<Pending />} />
          <Route path="/faq" element={<Pending />} />
          <Route path="/terms" element={<Pending />} />
          <Route path="/privacy" element={<Pending />} />
          <Route path="/cookie" element={<Pending />} />
          <Route path="/sitemap" element={<Pending />} />
          {/* Error paths */}
          <Route path="*" element={<Pending />} />
        </Routes>
        <ButtonScrollTop />
        <Toaster />
      </Layout>
    </Router>
  );
}

export default App;
