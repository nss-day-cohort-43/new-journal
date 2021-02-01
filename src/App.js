import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { Header } from "./components/Header";
import { FirebaseProvider } from "./components/fbAuth/FirebaseProvider";


function App() {

  return (
    <div className="App">
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
