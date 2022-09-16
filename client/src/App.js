//main react app that we're going to put all of our code that will display on the page
//Anything updated here will see automatically on the page  

import React from 'react'; 
import { Routes, Route, Link } from "react-router-dom";
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Trivia } from './components/Trivia';
import { Footer } from './components/Footer'


function App() { 
  console.log("App");
  return (
    <div className="App">
      
      <nav>Our navbar</nav>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trivia" element={<Trivia />} />
      </Routes>
      <footer>Our footer</footer>
      <Footer />  
    </div>
  );
}



export default App;
