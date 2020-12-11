import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import './App.css';
// import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
// import { ChrisList } from './components/journal/ChrisList';
// import firebase from "firebase";
// import { firebaseConfig } from "./components/fbAuth/firebaseConfig";
import { Header } from "./components/Header";
import { FirebaseProvider } from "./components/fbAuth/FirebaseProvider";


function App() {

  return (
    <div className="App">
      <h1>All I want for Christmas...</h1>
      <Router>
        <FirebaseProvider>
          <Header />
          <ApplicationViews />
        </FirebaseProvider>
      </Router>

    </div>
  );
}

export default App;
