import { Routes, Route } from "react-router-dom";
// Customer Panel
import LandingPage from "./routes/landing-page.component";
import BillLadingPage from './routes/bill-lading-page.component';
import Contactpage from './routes/contact.component' ;
import AboutPage from './routes/about.component'
// CSS
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/bill-of-lading" element={<BillLadingPage />} />
      <Route path="/about-us-company-profile" element={<AboutPage />} />
      <Route path="/contact-us" element={<Contactpage />} />
    </Routes>
  );
}

export default App;
