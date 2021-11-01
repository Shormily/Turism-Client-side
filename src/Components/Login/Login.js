import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeAuthentication();
const provider = new GoogleAuthProvider();
const Login = () => {
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div>
      <div>
        <h1 className="p">Please Login</h1>
      </div>
      {/* <Form className="container length ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font">Password</Form.Label>
          <Form.Control type="password " placeholder="Password" />
        </Form.Group> */}
      {/* <Button variant="dark" type="submit">
          Submit
        </Button>
        <br />
        <br />
      </Form> */}
      <Button variant="dark" type="submit" onClick={handleGoogleSignIn}>
        Google Sign in
      </Button>
    </div>
  );
};

export default Login;
