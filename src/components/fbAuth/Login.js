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
      <h3>Login To View Your List</h3>
      <div className="login-options">
        <div className="border-option">
          <Button onClick={loginGoogle} variant="outline-primary">Login With Google</Button>
        </div>
        <Form onSubmit={loginSubmit} className="border-option">
          <fieldset>
            <h5>or Login with Email and Password</h5>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
        </Button>
            <div>
              <hr />
              <em>
                No account? <Link to="register">Sign Up With Email and Password</Link>
              </em>
            </div>
          </fieldset>
        </Form>

      </div>
    </>
  );
}

