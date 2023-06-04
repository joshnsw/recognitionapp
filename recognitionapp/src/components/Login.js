import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes, Route, useNavigate
} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "josh@ng.com" && password === "123") {
      navigate(`/main`);
    } else {
      alert("Wrong email or password");
    }
  }

  return (

    <>
    <div className="loginBackground d-flex align-items-center">
    <div className="shadow-lg bg-body-secondary rounded loginPage">
      <h1>Company X</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
            onChange={(event) => setEmail(event.target.value)}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password}
            onChange={(event) => setPassword(event.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      </div>
    </div>
    </>
  )
}

export default Login;
