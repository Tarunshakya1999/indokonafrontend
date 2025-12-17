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

import SignupPage from "./components/Signup";
import LoginPage from "./components/Login";
import DashboardPage from "./components/DashboardPage";
import VerifyEmailPage from "./components/VerifyEmailPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import MsmeForm from "./MsmeForm";
import ExploreBusinessForms from "./Explore";
import FssaiForm from "./MyForms/FssaiForms";
import TrademarkForm from "./MyForms/TrademarkForm";
import TechServicesLanding from "./Developer";
import TC2 from "./T&C2";
import RefundPolicy from "./RefundPolicy2";
import PrivacyPolicy2 from "./PrivacyPolicy2";
import AcadmyTermsAndConditions from "./AcadmyTAC";
import AcadmyPrivacyPolicy from "./AcadmyPrivacyPolicy";
import AcadmyRefundPolicy from "./AcadmyRefundPolicy";
import AcadmyDisclaimer from "./AcadmyDisclaimer";
import "./index.css";
import M2MTermsPage from "./M2MTerms&Conditions";
import M2MPrivacyPolicy from "./M2MPrivacyPolicy";
import M2MRefundPolicy from "./M2MRefundPolicy";
import DigitalStorePrivacyPolicy from "./DigitalStorePrivacyPolicy";
import DigitalStoreRefundPolicy from "./DigitalStoreRefundPolicy";
import DigitalStoreTermsAndConditions from "./DigitalstoreTerms&Conditions";
import DigitalStoreDisclaimer from "./DigitalStoreDisclaimer";
import SuitePrivacyPolicy from "./SuitPrivacyPolicy";
import SuiteRefundPolicy from "./SuiteRefundPolicy";
import SuiteDisclaimer from "./SuiteDisclaimer";
import SuiteTermsAndConditions from "./SuiteTermsAndConditions";
import MindToMarket from "./MyM2M";

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
        <Route path="/msmeform" element={<MsmeForm />} />
        <Route path="/businessforms" element={<ExploreBusinessForms />} />

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
        <Route path="/fssaiform" element={<FssaiForm />} />
        <Route path="/trademark" element={<TrademarkForm />} />
        <Route path="/techservice" element={<TechServicesLanding />} />
        <Route path="/terms&conditions" element={<TC2 />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy2 />} />

        <Route path="/acadmytac" element={<AcadmyTermsAndConditions />} />
        <Route path="/acadmyprivacypolicy" element={<AcadmyPrivacyPolicy />} />
        <Route path="/acadmyrefundpolicy" element={<AcadmyRefundPolicy />} />
        <Route path="/acadmydisclaimer" element={<AcadmyDisclaimer />} />
        <Route path="/t&c" element={<M2MTermsPage />} />
        <Route path="/pp" element={<M2MPrivacyPolicy />} />
        <Route path="/rp" element={<M2MRefundPolicy />} />
        <Route
          path="/digitalstoreprivacypolicy"
          element={<DigitalStorePrivacyPolicy />}
        />
        <Route
          path="/digitalstorerefundpolicy"
          element={<DigitalStoreRefundPolicy />}
        />
        <Route
          path="/digitalstorereterms&conditions"
          element={<DigitalStoreTermsAndConditions />}
        />
        <Route
          path="/digitalstoredisclaimer"
          element={<DigitalStoreDisclaimer />}
        />
        <Route path="/suiteprivacypolicy" element={<SuitePrivacyPolicy />} />
        <Route path="/suiterefundpolicy" element={<SuiteRefundPolicy />} />
        <Route path="/suitedisclaimer" element={<SuiteDisclaimer />} />
        <Route
          path="/suitetermsandconditions"
          element={<SuiteTermsAndConditions />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
