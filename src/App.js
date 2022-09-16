//main react app that we're going to put all of our code that will display on the page
//Anything updated here will see automatically on the page  

import React from 'react';
//import Login from './Login.js'; 
import { Routes, Route, Link } from "react-router-dom";
import { About } from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'

function App() { 
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
// function App() {
//   return (
//     <main className="App"> 
//     Hello 
//       <Login /> 
//     </main>
//   );
// }


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello 
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default App;
