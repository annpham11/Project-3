//main react app that we're going to put all of our code that will display on the page
//Anything updated here will see automatically on the page  

import React from 'react';
import Login from './Login.js'; 


function App() {
  return (
    <main className="App"> 
    Hello 
      <Login /> 
    </main>
  );
}


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
