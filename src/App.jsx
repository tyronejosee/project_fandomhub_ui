import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import Layout from './components/layout/Layout';
// import AnimeDetail from "./pages/AnimeDetail";
import Pending from './components/common/Pending';
import { GenrePage } from './pages/GenrePage';
import ContentDetail from './components/content/ContentDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main paths */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HelpPage />} />
          <Route path="/article" element={<Pending />} />
          <Route path="/genres" element={<GenrePage />} />
          <Route path="/genres/:id" element={<Pending />} />
          {/* Help paths */}
          <Route path="/animes/:id" element={<ContentDetail />} />
          <Route path="/animes" element={<Pending />} />
          <Route path="/mangas" element={<Pending />} />
          <Route path="/help/support" element={<Pending />} />
          <Route path="/help/advertising" element={<Pending />} />
          <Route path="/help/faq" element={<Pending />} />
          <Route path="/help/terms" element={<Pending />} />
          <Route path="/help/privacy" element={<Pending />} />
          <Route path="/help/cookie" element={<Pending />} />
          <Route path="/help/notice-at-collection" element={<Pending />} />
          <Route path="/sitemap" element={<Pending />} />
          {/* Error paths */}
          <Route path="*" element={<Pending />} />
        </Routes>
        <Toaster />
      </Layout>
    </Router>
  );
}

export default App;
