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
              <img
                className="icon"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/403417681_324462643764488_1999405666588347622_n.jpg?stp=dst-jpg_p173x172&_nc_cat=105&ccb=1-7&_nc_sid=510075&_nc_ohc=1kfQbmQ5eIMAX--2-Oq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ4z9Nd4m5eizP6g9InaFjVI0oOSnzPqhgneDU7FL-l0A&oe=65A679C3"
                alt=""
              />
            </div>
            <p className="nam_e">DCN</p>
          </div>
        </div>
      </div>
      <Form />
    </>
  );
}

export default Login;
