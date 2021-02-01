import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { FirebaseContext } from "./fbAuth/FirebaseProvider";
import Login from "./fbAuth/Login";
import Register from "./fbAuth/Register";
import { ChrisList } from "./journal/ChrisList";
import { ChrisListAddForm } from "./journal/ChrisListAddForm";
import { ChrisItemUpdate } from "./journal/ChrisItemUpdate";


export default function ApplicationViews() {
  const { isLoggedIn } = useContext(FirebaseContext);

  return (
    <main>
    
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <ChrisList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/home">
          {isLoggedIn ? <ChrisList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/list">
          {isLoggedIn ? <ChrisList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/add">
          {isLoggedIn ? <ChrisListAddForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/chrisItem/edit/:chrisItemId">
          {isLoggedIn ? <ChrisItemUpdate /> : <Redirect to="/login" />}
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

/*
 <main>
    {console.log("process.env.PUBLIC_URL", process.env)}
      <Switch>
        
        <Route path={process.env.PUBLIC_URL + "/"} exact>
          {isLoggedIn ? <ChrisList /> : <Redirect to="/login" />}
        </Route>

        <Route path={process.env.PUBLIC_URL + "/add"}>
          {isLoggedIn ? <ChrisListAddForm /> : <Redirect to={process.env.PUBLIC_URL + "/login"} />}
        </Route>

        <Route path={process.env.PUBLIC_URL + "/login"}>
          <Login />
        </Route>

        <Route path={process.env.PUBLIC_URL + "/register"}>
          <Register />
        </Route>
      </Switch>
    </main>
    */