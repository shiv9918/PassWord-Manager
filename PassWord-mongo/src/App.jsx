import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componant/navbar";
import Manager from "./componant/manager";  
import Footer from "./componant/Footer";
import Login from "./componant/Login";
import About from "./componant/About";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            {/* ✅ Default Home Page - Manager दिखेगा */}
            <Route path="/" element={<Manager />} />

            {/* ✅ Other Pages - सिर्फ़ वही दिखेंगे */}
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
