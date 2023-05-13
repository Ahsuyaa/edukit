import "./App.css";
import Nav from "./components/navbar/Nav";
import Head from "./components/Header/Head";
import Home from "./components/home/Home";
import Blog from "./components/home/Blog";
import Blogs from "./components/blog/Blogs";


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
import Training from "./components/training/Training";
import Admission from "./components/training/Admission";
import Teams from "./components/teams/Teams"
import CareerDetail from "./components/career/CareerDetail";
import ApplyForm from "./components/career/ApplyForm";
import BlogDetail from "./components/blog/BlogDetail";
import LearnMore from "./components/training/LearnMore";
function App() {
  return (
    <>
      <Router>
        <Head/>
        <Nav/>
         <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/faq" element={<FAQ  />} />
        <Route path="/career" element={<Career />} />
        <Route path="/trainings" element={<Training/>} />
        <Route  path="/blogs" element={<Blogs/>} />
        <Route path="/admission" element={<Admission/>} />
        <Route  path="/teams" element={<Teams/>}/>
        <Route  path="/careerdetail" element={<CareerDetail/>}/>
        <Route  path="/applyform" element={<ApplyForm/>}/>
        <Route  path="/blogdetail" element={<BlogDetail/>}/>
        <Route  path="/learnmore" element={<LearnMore/>}/>
        </Routes>
       
        {/* <Home /> */}
        
        <Footer />
        
        </Router>
    </>
  );
}

export default App;
