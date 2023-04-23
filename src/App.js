
import './App.css';
import Nav from './components/navbar/Nav'
import Head from './components/Header/Head'
import Home from './components/home/Home'
import Courses from './components/Courses/Courses';

import Blog from './components/Blogs/Blog';

import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
   
  <BrowserRouter>
  <Nav/>
  <Routes>


  <Route exact path="/" element={<Home/>}/>
 

   </Routes>
   <Courses/>
   <Blog/>
   </BrowserRouter>
    </>
  );
}

export default App;
