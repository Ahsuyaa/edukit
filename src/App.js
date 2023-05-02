import "./App.css";
import Nav from "./components/navbar/Nav";
import Head from "./components/Header/Head";
import Home from "./components/home/Home";
import Blog from "./components/home/Blog";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import FAQ from "./components/Faq/FAQ";
import Career from "./components/career/Career";
function App() {
  return (
    <>
      <Router>
        <Head/>
        <Nav/>
         <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faq" element={<FAQ  />} />
        <Route exact path="/career" element={<Career />} />
        

        </Routes>
       
        {/* <Home /> */}
        
        <Footer />
        
        </Router>
    </>
  );
}

export default App;
