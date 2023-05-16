import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import LoginImg from "../../component/image/Loginpage_img_computer.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/home");
  };

  const handleLogin = () => {
    axios
      .post(
        "https://asia-southeast1-capstone-project-382606.cloudfunctions.net/app/api/login",
        { username, password }
      )
      .then((response) => {
        // jika login berhasil, lakukan sesuatu di sini
        console.log(response.data);
        navigate("/home");
        localStorage.setItem("userData", JSON.stringify(response.data));
        //navigate("/home",);
        //navigate("/profil", { state: { userData: response.data } });
        setShowModal(true);
        console.log("selamat anda berhasil login");
      })
      .catch((error) => {
        // jika login gagal, tampilkan pesan kesalahan di sini
        console.log(error);
        console.log("gagal melakukan login");
      });
  };

  return (
    <div className="login-content-box">
      <div className="main-content-login">
        <h2 className="header-login">Login</h2>
        <form>
          <div className="email-input-box">
            <label className="label-email">Username*</label>
            <input
              className="email-input"
              type="username"
              value={username}
              onChange={handleEmailChange}
              placeholder="Enter Your Username"
              required
            />
          </div>
          <br />
          <div className="password-input-box">
            <label className="label-password">Password*</label>
            <input
              className="password-input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <br />
          {showModal ? (
            <div className="modal">
              <div className="modal-content">
                <h2 className="header-login">Login berhasil!</h2>
                <button className="btn-home" onClick={handleCloseModal}>
                  Home
                </button>
              </div>
            </div>
          ) : (
            <>
              <button className="btn-login" type="button" onClick={handleLogin}>
                Login
              </button>
              <div>
                <Link to="/register">
                  <button className="btn-sigup" type="button">
                    Sign Up
                  </button>
                </Link>
              </div>
            </>
          )}
        </form>
      </div>
      <div className="image-content">
        <img className="image-login" src={LoginImg} alt="login page" />
      </div>
    </div>
  );
};

export default Login;

// login, email: nyomantri@gmail.com, pass: nyomantri2000
