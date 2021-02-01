import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
/*
    The context is imported and used by individual components
    that need data
*/
export const FirebaseContext = createContext()

/*
 This component establishes what data can be used.
 */
export const FirebaseProvider = (props) => {
  const userProfile = sessionStorage.getItem("userProfile");
  const [isLoggedIn, setIsLoggedIn] = useState(userProfile != null);

  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  const provider = new firebase.auth.GoogleAuthProvider();
  //https://firebase.google.com/docs/auth/web/start?authuser=0

  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((u) => {
      setIsFirebaseReady(true);
    });
  }, []);

  //setup other firebase logins


  const login = (email, pw) => {
    return firebase.auth().signInWithEmailAndPassword(email, pw)

      .then((userProfile) => {
        sessionStorage.setItem("userProfile", JSON.stringify(userProfile.user));
        setIsLoggedIn(true);
      });
  };

  const logout = () => {
    return firebase.auth().signOut()
      .then(() => {
        sessionStorage.clear()
        setIsLoggedIn(false);
      });
  };

  const register = (userProfile, password) => {
    return firebase.auth().createUserWithEmailAndPassword(userProfile.email, password)
      .then(savedUserProfile => {
        console.log('savedU', savedUserProfile)
        sessionStorage.setItem("userProfile", JSON.stringify(savedUserProfile.user))
        setIsLoggedIn(true);
      });
  };
  

  const signInWithGoogle = () => {
    return firebase.auth().signInWithPopup(provider)
      .then(savedUserProfile => {
        console.log('savedU', savedUserProfile)
        sessionStorage.setItem("userProfile", JSON.stringify(savedUserProfile.user))
        setIsLoggedIn(true);
      })
  }


  /*
    You return a context provider
    allow any child elements to access them.
*/

  return (
    <FirebaseContext.Provider value={{ isLoggedIn, login, logout, register, signInWithGoogle }}>
      {isFirebaseReady
        ? props.children
        : <Spinner className="app-spinner dark" />}
    </FirebaseContext.Provider>
  );
}
