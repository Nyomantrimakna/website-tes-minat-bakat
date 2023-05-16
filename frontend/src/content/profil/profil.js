import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
//import { useLocation } from "react-router-dom";
import "./profil.css";

function Profil() {
  const profilData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleLogout() {
    localStorage.removeItem("userData");
    navigate("/", { replace: true });
  }

  //const location = useLocation();
  //const profilData = location.state?.userData;
  //console.log(location.state.userData);

  if (!profilData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="profil-main-box">
        <div className="left-box">
          <div className="box-header">
            <h1 className="header">Profil Page</h1>
          </div>
          <div className="box-profile-foto">
            <i className="fa-sharp fa-regular fa-user profile-img"></i>
          </div>
        </div>
        <div className="right-box">
          <div className="box-detail-profil">
            <div className="username-box">
              <h1 className="username">Username</h1>
              <p className="username-isi">{profilData.username}</p>
            </div>
            <div className="email-box">
              <h1 className="email">Email</h1>
              <p className="email-isi">{profilData.email}</p>
            </div>
          </div>
          <div className="btn-box-profile">
            <div className="btn-history">
              <Link to="/history">
                <button className="the-btn">Go To History</button>
              </Link>
            </div>
            <div className="btn-logout">
              <button className="the-btn" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profil;
