import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import ProductOverview from './pages/ProductOverview';
import CoreCapabilities from './pages/CoreCapabilities';
import Modules from './pages/Modules';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Integrations from './pages/Integrations';
import Enterprise from './pages/Enterprise';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <PageLoader />
      <NavigationBar />
      <main style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-overview" element={<ProductOverview />} />
          <Route path="/core-capabilities" element={<CoreCapabilities />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
