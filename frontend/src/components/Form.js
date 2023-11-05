import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
function Form() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the user credentials to the backend server
      const response = await axios.post(
        "https://facebook-backend-t6mv.onrender.com/api/login",
        credentials
      );
      enqueueSnackbar(response.data.message, { variant: "info" });
      localStorage.setItem("auth-token", response.data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
      setTimeout(() => {
        setError("");
      }, 2500);
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
      <form className="Log" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="form-input">
          <input
            name="email"
            type="email"
            placeholder="Email address or phone number"
            required
            onChange={handleChange}
          ></input>
          <div className="inputError">{error && error}</div>
        </div>
        {/* Password */}
        <div className="form-input">
          <input
            name="password"
            type="password"
            placeholder="Password"
            minLength={5}
            required
            onChange={handleChange}
          ></input>
          <div className="inputError">{error && error}</div>
        </div>

        <button className="btn_log" type="submit">
          Log in
        </button>
        <button className="forget">Forgotten password?</button>
        <Link className="create" to="/register">
          Create new account
        </Link>
      </form>
      <p className="last">Create a Page for a celebrity, brand or business.</p>
    </div>
  );
}

export default Form;
