import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Destinations from "./Destinations";
import Services from "./Services";
import About from "./About";
import Why_choose_us from "./ChooseUs";
import Feedback from "./feedback";
import Contact from "./Contact";
import Footer from "./Footer";
import LoginnSignup from "./pages/LoginnSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main page with all sections */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Destinations />
              <Services />
              <About />
              <Why_choose_us />
              <Feedback />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Login page */}
        <Route path="/Loginnsignup" element={<LoginnSignup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

