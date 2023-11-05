import React from "react";
import "./Login.css";
import Form from "./Form.js";
function Login() {
  return (
    <>
      <div className="main">
        <h1 className="face">Facebook</h1>
        <p className="Previous_login">Recent logins</p>
        <p className="click">Click your picture or add an acount.</p>
        <div className="add_acc">
          <div>
            <img className="faceimg" src="./Salman.jpg" alt="" />
            <p className="nam_e">Salman</p>
          </div>
          <div>
            <div className="icon_section">
              <img className="icon" src="./add_circle_fill.svg" alt="" />
            </div>
            <p className="nam_e">Add Account</p>
          </div>
        </div>
      </div>
      <Form />
    </>
  );
}

export default Login;
