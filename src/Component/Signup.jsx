import React, { useState } from "react"
import axios  from "axios"
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [allDetails, setallDetails] = useState([]);


  const register = () => {
    axios.post("http://localhost:5000/user/register", {firstName, lastName, email, password})
    setallDetails([...allDetails,])
    console.log(firstName,lastName,email,password,);
    
  };

  return (
    <div>
      <div className="col-5 mx-auto">
        <h1 className='text-center text-success'>Sign Up</h1>

        <div className="mb-3">
          <label className="form-label">Firstname</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Lastname</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>

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
          <Link to="/signin" className="btn btn-primary w-100" onClick={register}>
            SUBMIT
          </Link>
        </div>
      </div>
      <div className="col-8 mx-auto mt-4">
        <table className="table table-stripped">
          <thead>
            <tr className="table-primary">
              <th>S/N</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email Address</th>
              <th>Actions</th>
            </tr>
          </thead>

          {allDetails.map((item, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>
                  <button className="btn btn-danger mx-2">Delete</button>
                  <button className="btn btn-warning">Edit</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Signup; 
