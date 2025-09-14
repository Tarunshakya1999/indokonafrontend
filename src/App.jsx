import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
// import Login from "./Login";  
import Hero from "./Hero";    // homepage hero sectio
import Navbar from "./Nav";

function App() {
  return (
    <BrowserRouter>
    
    
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login2" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
