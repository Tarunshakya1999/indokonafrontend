import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
// import Login from "./Login";
import Hero from "./Hero"; // homepage hero sectio

// Policy Pages
import PrivacyPolicy from "./Privacy";
import TermsAndConditions from "./TAC";
import CookiePolicy from "./Cookies";
import Disclaimer from "./Disclaimer";
import Disclosure from "./Disclouser";
import SupportPolicy from "./Grevience";
import Login from "./Login";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/support-policy" element={<SupportPolicy />} />
        <Route path="/disclouser" element={<Disclosure/>}/>
        <Route path="/login" element={<Login/>}/>
 
        {/* <Route path="/login2" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
