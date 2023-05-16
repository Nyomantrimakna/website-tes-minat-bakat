import React from "react";
import { Link } from "react-router-dom";

function PopupLogin() {
  return (
    <>
      <div className="popup">
        <div className="window">
          <Link className="close-btn" title="close">
            <h2>Selamat anda berhasil login</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PopupLogin;
