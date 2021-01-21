import React, { useState, useContext } from "react";
import { Button, Form } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import { FirebaseContext } from "./FirebaseProvider";

export default function Login() {
  const history = useHistory();
  const { login } = useContext(FirebaseContext);
  const { signInWithGoogle } = useContext(FirebaseContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => history.push("/"))
      .catch(() => alert("Invalid email or password"));
  };

  const loginGoogle = () => {
    signInWithGoogle()
      .then(response => history.push("/"))
  }


  return (

    <>
      <h3>Please sign in.</h3>
      
      <div className="login-options">
        <div className="border-option">
          <Form onSubmit={loginSubmit} >
            <fieldset>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>

              <Button variant="primary" type="submit">Sign In</Button>
              
            </fieldset>
          </Form>
          <hr />
          <em>
            No account? <Link to="register">Create one with your email.</Link>
          </em>
          <div className="d-flex p-2 flex-wrap">
            <hr />
            <Button className="btn-block" onClick={loginGoogle} variant="outline-primary">Continue with Google</Button>
          </div>
        </div>
      </div>
    </>
  );
}

