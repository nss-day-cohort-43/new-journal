import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { FirebaseContext } from "./fbAuth/FirebaseProvider";
import Login from "./fbAuth/Login";
import Register from "./fbAuth/Register";
// import ChrisListAddForm from "./ChrisListAddForm";
import { ChrisList } from "./journal/ChrisList";
import { ChrisListAddForm } from "./journal/ChrisListAddForm";


export default function ApplicationViews() {
  const { isLoggedIn } = useContext(FirebaseContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <ChrisList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/add">
          {isLoggedIn ? <ChrisListAddForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
};