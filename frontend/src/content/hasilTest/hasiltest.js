import React from "react";
import axios from "axios";
import "./hasiltest.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { Link, useNavigate } from "react-router-dom";

function HasilTest() {
  const navigate = useNavigate();
  const hasilTest = JSON.parse(localStorage.getItem("userTest"));

  if (!hasilTest) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="box-main-hasiltest">
        <h1 className="nama-kepribadian">
          {hasilTest.result.nama_kepribadian}
        </h1>
        ;
        <div className="box-rekomendasi">
          <h1 className="header-rekomendasi">
            Penjurusan Yang Sesuai Dengan Kepribadian Anda
          </h1>
          <p className="rekomendasi-jurusan">
            {hasilTest.result.rekomendasi_jurusan}
          </p>
        </div>
        <div className="box-deskripsi">
          <h1 className="header-deskripsi">
            Penjelasan Tentang Kepribadian Anda
          </h1>
          <p className="deskripsi">{hasilTest.result.deskripsi}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HasilTest;
