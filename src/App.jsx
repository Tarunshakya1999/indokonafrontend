import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
// import Login from "./Login";
import Hero from "./Hero"; // homepage hero sectio
// src/index.js या src/App.js में
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
// Policy Pages
import PrivacyPolicy from "./Privacy";
import TermsAndConditions from "./TAC";
import CookiePolicy from "./Cookies";
import Disclaimer from "./Disclaimer";
import Disclosure from "./Disclouser";
import SupportPolicy from "./Grevience";
import Login from "./Login";
import Navbar from "./Nav";
import ContactForm from "./ContactForm";
import AboutUs from "./AboutUs";
import FintechServices from "./Fintech";
// import MindToMarketPage from "./M2M";
import App2 from "./M2M";
import MindToMarketPage from "./M2M";
import TestimonialForm from "./TestimonialForm";
import TestimonialList from "./TestimonialList";
import IndokonaSuitePage from "./Suite";
import SAAS from "./SaaS";
import IndokonaServicesPage from "./Services";
import MyStore from "./DigitalStore";
import AddProduct from "./AddProduct";
import CartPage from "./CartPage";
import ProductList from "./ProductList";
import EditProduct from "./EditProduct";




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
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/fintech" element={<FintechServices/>}/>
        <Route path="/m2m" element={<MindToMarketPage/>}/>

        <Route path="/feedback" element={<TestimonialForm/>}/>
        <Route path="/feedbacklist" element={<TestimonialList/>}/>
        <Route path="/suite" element={<IndokonaSuitePage/>}/>
        <Route path="/saas" element={<SAAS/>}/>
        <Route path="/services" element={<IndokonaServicesPage/>}/>
        <Route path="/store" element={<MyStore/>}/>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="productlist" element={<ProductList/>}/>
        <Route path="/edit-product/:id" element={<EditProduct/>} />

       
=
        {/* <Route path="/login2" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
