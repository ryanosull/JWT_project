import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginModal from "./LoginModal.js";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

	const [currentUser, setCurrentUser] = useState(null)

	useEffect( () => {
    if (localStorage.uid)
		fetch('/auto_login', {headers: {
			'Content-Type': 'application/json',
			'auth-token': localStorage.uid
		} } )
		.then(resp => resp.json())
		.then(setCurrentUser)
    else
		console.log("User not found")
	}, []);


	console.log(currentUser)     //leaving this here - you should take it out when no longer neeeded!

	return (
    <div className="App">        
		<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginModal currentUser={currentUser} setCurrentUser={setCurrentUser}/>
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