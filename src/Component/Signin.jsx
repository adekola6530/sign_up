import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const register = () => {
    axios
      .post("http://localhost:5000/user/signin", { email, password })
      .then((response) => {
        if (response.data.status) {
          localStorage.token = response.data.token;
          navigate("/dashboard");
        } else {
          console.log("Wrong Credentials");
        }
      });
    //console.log(email,password,);
  };
  return (
    <div>
      <div className="col-5 mx-auto">
        <h1 className="text-center text-success">Sign In</h1>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <div className="mx-auto text-center">
          <button className="btn btn-primary w-100" onClick={register}>
            SIGNIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
