import React, { useState, useContext } from "react";
import { Button, Form } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import { FirebaseContext } from "./FirebaseProvider";

export default function Register() {
  const history = useHistory();
  const { register } = useContext(FirebaseContext);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      const userProfile = { name, email };
      register(userProfile, password)
        .then(() => history.push("/"));
    }
  };

  return (
    <>
      <h3>Register To Start Your Christmas List</h3>
      <div className="login-options">
        <div className="border-option">
          <Form onSubmit={registerClick}>
            <fieldset>

              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control id="name" type="text" onChange={e => setName(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
          </Form.Text>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>


              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" onChange={e => setConfirmPassword(e.target.value)} />
              </Form.Group>

              <Button variant="primary" type="submit">Register</Button>
            </fieldset>
          </Form>
          <div>
            <hr />
            <em>
              Already have an account? <Link to="login">Login</Link>
            </em>
          </div>
        </div>
      </div>
    </>
  );
}