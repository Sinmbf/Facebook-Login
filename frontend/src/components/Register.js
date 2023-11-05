import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import "./Form.css";
function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the password matches
      const { password, cpassword } = credentials;
      if (password !== cpassword) {
        setError("Passwords don't match");
        setTimeout(() => {
          setError("");
        }, 2500);
        return;
      }
      // Send the user credentials to the backend server
      const response = await axios.post(
        "http://localhost:5000/api/register",
        credentials
      );
      enqueueSnackbar(response.data.message, { variant: "success" });
      navigate("/login");
    } catch (error) {
      enqueueSnackbar(error.response.data, { variant: "error" });
    }
  };
  // Function to handle change
  const handleChange = (e) => {
    setCredentials((currentCredentials) => {
      return { ...currentCredentials, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <div className="text-center">
        <h1>Create a new account</h1>
      </div>
      <form className="Log" onSubmit={handleSubmit}>
        {/* Username */}
        <div className="form-input">
          <input
            type="text"
            placeholder="Username"
            name="username"
            minLength={3}
            required
            onChange={handleChange}
          ></input>
        </div>
        {/* Email */}
        <div className="form-input">
          <input
            type="email"
            placeholder="Email address or phone number"
            name="email"
            required
            onChange={handleChange}
          ></input>
        </div>
        {/* Password */}
        <div className="form-input">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength={5}
            required
            onChange={handleChange}
          ></input>
          <div className="inputError">{error && error}</div>
        </div>
        {/* Confirm Password */}
        <div className="form-input">
          <input
            type="password"
            placeholder="Confirm Password"
            name="cpassword"
            minLength={5}
            required
            onChange={handleChange}
          ></input>
          <div className="inputError">{error && error}</div>
        </div>
        <button className="create" type="submit">
          Register
        </button>
      </form>
      <p className="last">Create a Page for a celebrity, brand or business.</p>
    </div>
  );
}

export default Register;
