import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const { signIn,user } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { email, password };
    console.log(newUser);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        
        // get access token
        axios.post("http://localhost:5000/jwt", user, {
          withCredentials: true
        }).then((res) => {
          console.log(res.data);
          if (res.data.success) {
            navigate(location?.state ? location?.state : "/");
          }
        });
      })
      .then((error) => console.log(error));
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-5">
          <img src={login} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center">Login!!!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button value="login" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="text-center my-4">
            New to Car Doctor ?
            <Link to="/signup" className="text-orange-500 ml-2 font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
