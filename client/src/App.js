import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect( () => {
    if (localStorage.uid)
      console.log('User found:', localStorage.uid)
    else
      console.log("User not found")
  }, []);

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      email: 'satoshi@nakamoto.com',
      password: 'Satoshi123!'
    })
  })
  .then(resp => resp.json())
  .then(user => {
    localStorage.uid = user.uid
    setCurrentUser(user.id)
  }); 

  console.log(currentUser)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

////////////////////////////////////////////////////////////////////////////


// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch("/hello")
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Page Count: {count}</h1>
//     </div>
//   );
// }

// export default App;


//////////////////////////////////////////////////////////////////////////////


// // client/src/components/App.js
// import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch("/hello")
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route path="/testing">
//             <h1>Test Route</h1>
//           </Route>
//           <Route path="/">
//             <h1>Page Count: {count}</h1>
//           </Route>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;