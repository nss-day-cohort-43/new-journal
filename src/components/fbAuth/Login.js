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


    <Form onSubmit={loginSubmit}>
      <fieldset>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <em>
          Not registered? <Link to="register">Register</Link>
        </em>
        <Button onClick={loginGoogle}>Or Login with Google</Button>
      </fieldset>
    </Form>

  );
}

//signInWithGoogle()