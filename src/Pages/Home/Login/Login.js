import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {

    const handleSubmit=event=>{
        event.preventDefault();
    }
  return (
    <div className="container bg-success d-flex justify-content-center mt-3 w-75">
      <Form onSubmit={handleSubmit} className="w-25">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Forget Password" />
        </Form.Group>
        <p>
          AllReady Have and account?
          <Link className="from-link" to="/login">
            Login
          </Link>
        </p>
        <Button variant="primary mb-3" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
