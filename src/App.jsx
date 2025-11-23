import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
// import Login from "./Login";
import Hero from "./Hero"; // homepage hero sectio
// src/index.js या src/App.js में
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
// Policy Pages
import PrivacyPolicy from "./Privacy";
import TermsAndConditions from "./TAC";
import CookiePolicy from "./Cookies";
import Disclaimer from "./Disclaimer";
import Disclosure from "./Disclouser";
import SupportPolicy from "./Grevience";
import Login from "./Login";
import ContactForm from "./ContactForm";
import AboutUs from "./AboutUs";
import FintechServices from "./Fintech";
// import MindToMarketPage from "./M2M";
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
import BlogPage from "./BlogPage";
import BlogManager from "./BlogManager";
import AcademyPage from "./AcademyPage";
import Signup from "./AcadmicSignUp";
import Login2 from "./AcadmicLogin";
import Profile from "./AcadmicProfile";
import ProductDetail from "./ProductDetail";
import CRMNavbar from "./CRM";

import IndokonaCRMApp from "./dashbaord";
import IndokonaCRMSuite from "./SuiteCRM";
import CRMLayoutPremium from "./FintechCRM";

import MyApp from "./Wall";
import PublicProfileForm from "./PublicProfile";
import ReelUploadForm from "./ReelsuploadForm";
import Reels from "./Reels";
import ProfileAssets from "./ProfileAssets";
import LoanCRMModulePreview from "./Loan";
import UsefulLinksPage from "./UsefullLinks";
import IndokonaJobPortal from "./Jobs";

import SignupPage from './components/Signup';
import LoginPage from './components/Login';
import DashboardPage from './components/DashboardPage';
import VerifyEmailPage from './components/VerifyEmailPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ResetPasswordPage from './components/ResetPasswordPage';

//Acadmic Files

function App() {
  // axios.defaults.withCredentials = true;
  // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

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
        <Route path="/disclouser" element={<Disclosure />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/fintech" element={<FintechServices />} />
        <Route path="/m2m" element={<MindToMarketPage />} />
        <Route path="/feedback" element={<TestimonialForm />} />
        <Route path="/feedbacklist" element={<TestimonialList />} />
        <Route path="/suite" element={<IndokonaSuitePage />} />
        <Route path="/saas" element={<SAAS />} />
        <Route path="/services" element={<IndokonaServicesPage />} />
        <Route path="/store" element={<MyStore />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/admin/blogs" element={<BlogManager />} />
        <Route path="/acadmy" element={<AcademyPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/crm" element={<CRMNavbar />} />
        <Route path="/mycrm" element={<IndokonaCRMApp />} />
        <Route path="/suitecrm" element={<IndokonaCRMSuite />} />
        <Route path="/crmfintech" element={<CRMLayoutPremium />} />
        <Route path="/wall" element={<MyApp />} />
        <Route path="/pf" element={<PublicProfileForm />} />
        <Route path="/reelsupload" element={<ReelUploadForm />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/assets" element={<ProfileAssets />} />
        <Route path="/loan" element={<CRMLayoutPremium />} />
        <Route path="/loan2" element={<LoanCRMModulePreview />} />
        <Route path="/links" element={<UsefulLinksPage />} />
        <Route path="/jobs" element={<IndokonaJobPortal />} />

        <Route path="/login22" element={<LoginPage />} />
        <Route path="/signup2" element={<SignupPage />} />
        <Route path="/verify-email/:uid/:token" element={<VerifyEmailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/reset-password/:uid/:token"
          element={<ResetPasswordPage />}
        />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* <Route path="/login2" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
