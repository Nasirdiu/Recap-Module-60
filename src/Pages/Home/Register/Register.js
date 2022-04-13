import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Register = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

if(user){
    navigate('/home')
}
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="register-from bg-success">
      <h1 className="text-center text-success mt-3">This a Register Now</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="your password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        AllReady Have and account?
        <Link className="from-link text-decoration-none text-light" to="/login">
          Login Now..
        </Link>
      </p>
    </div>
  );
};

export default Register;
