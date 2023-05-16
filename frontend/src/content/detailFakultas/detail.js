import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { useParams } from "react-router-dom";
import "./detail.css";

function Detail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();
  const baseURL = `https://asia-southeast1-capstone-project-382606.cloudfunctions.net/app/api/info/fakultas/${name}/details`;

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
        <div className="main-content-detail">
          <div className="hero-section-detail">
            <h1 className="head-detail-hero">{data?.nama_fakultas}</h1>
          </div>
          <div className="content-detail">
            <div className="penjelasan">
              <h2 className="header-detail">
                Simak Penjelasan Lengkap {data?.nama_fakultas}
              </h2>
              <p className="paragraf-penjelasan">{data?.penjelasan}</p>
            </div>
            <div className="program-studi">
              <h2 className="header-detail">
                Program Studi Yang Ada di {data?.nama_fakultas}
              </h2>
              <div className="list-prodi-detail">
                <ul className="list-prodi1">
                  <li>{data?.prodi1}</li>
                  <li>{data?.prodi2}</li>
                  <li>{data?.prodi3}</li>
                  <li>{data?.prodi4}</li>
                </ul>
                <ul className="list-prodi2">
                  <li>{data?.prodi5}</li>
                  <li>{data?.prodi6}</li>
                  <li>{data?.prodi7}</li>
                  <li>{data?.prodi8}</li>
                </ul>
              </div>
            </div>
            <div className="prospek-kerja">
              <div className="penjelasan">
                <h2 className="header-detail">
                  Prospek Kerja {data?.nama_fakultas}
                </h2>
                <p className="paragraf-penjelasan">{data?.prospek_kerja}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Detail;
