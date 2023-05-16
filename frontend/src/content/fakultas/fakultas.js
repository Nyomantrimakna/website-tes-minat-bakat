import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { Outlet, Link } from "react-router-dom";
import "./fakultas.css";

const baseURL =
  "https://asia-southeast1-capstone-project-382606.cloudfunctions.net/app/api/info/fakultas";

function Fakultas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axios.get(baseURL).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <h1 className="loading">
          <span className="loader"></span>
        </h1>
      ) : (
        <div className="main-content-fakultas">
          <div className="container-header">
            <h1 className="main-header">List Fakultas</h1>
            <p className="main-text-header">
              Simak Informasi Fakultas Yang Kalian Inginkan
            </p>
          </div>
          <div className="container-list-fakultas">
            {data.map((item, index) => (
              <div key={item.id} className="fakultas-list">
                <h1 className="header-list">FindTheWay</h1>
                <div className="list-fakultas-name">
                  <h2 className="fakultas-name">{item.nama_fakultas}</h2>
                  <Link to={item.link} className="the-link">
                    Lihat Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
      <Outlet />
    </>
  );
}

export default Fakultas;
