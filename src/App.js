import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MockupFFStarterKits from "./pages/portfolio/MockupFFStarterKits";
import WebFFStarterKits from "./pages/portfolio/WebFFStarterKits";
import MockupDigiLine from "./pages/portfolio/MockupDigiLine";
import WebDigiLine from "./pages/portfolio/WebDigiLine";
import WebBCH from "./pages/portfolio/WebBCH";
import WebNewsletter from "./pages/portfolio/WebNewsletter";
import WebNotflix from "./pages/portfolio/WebNotflix";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/mockup/ffstarterkits" element={<MockupFFStarterKits />} />
      <Route path="/web/ffstarterkits" element={<WebFFStarterKits />} />
      <Route path="/mockup/digiline" element={<MockupDigiLine />} />
      <Route path="/web/digiline" element={<WebDigiLine />} />
      <Route path="/web/bandung-creative-hub" element={<WebBCH />} />
      <Route path="/web/newsletter" element={<WebNewsletter />} />
      <Route path="/web/notflix" element={<WebNotflix />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
