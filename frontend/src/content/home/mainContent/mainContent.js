import React from "react";
import ImageOne from "../../../component/image/img_home1.png";
import ImageTwo from "../../../component/image/img_home2.png";
import ImageTree from "../../../component/image/img_home3.png";
import { Link } from "react-router-dom";
import "./mainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <h1 className="primary-heading">Tentang Kami</h1>
      <div className="main-content-warp">
        <div className="main-content-box">
          <div className="main-content-item-image">
            <img
              src={ImageOne}
              alt="Tes Minat dan Bakat"
              className="main-image"
            />
          </div>
          <div className="main-content-item-text">
            <h2 className="heading-content">Tes Minat dan Bakat</h2>
            <p className="paragraf-content">
              Kami memberikan layanan tes minat dan bakat bagi para siswa dan
              siswi SMA, yang ingin mengetahui penjurusan apa yang sesuai dengan
              minat dan bakat kalian, hal ini dapat memberikan pilihan bagi
              kalian untuk meneruskan pendidikan ke jenjang selanjutnya yaitu,
              dunia perkuliahan.
            </p>
          </div>
        </div>
        <div className="main-content-box">
          <div className="main-content-item-text">
            <h2 className="heading-content">Penjurusan Kuliah</h2>
            <p className="paragraf-content">
              Ada berbagai macam penjurusan yang di Indonesia ini, disini kami
              memberikan informasi mengenai penjurusan kuliah tersebut yaitu,
              penjelasan singkat, program studi yang tersedia, dan prospek kerja
              kedepannya, untuk memberikan sedikit gambaran mengenai penjurusan
              tersebut.
            </p>
          </div>
          <div className="main-content-item-image">
            <img
              src={ImageTwo}
              alt="Penjurusan Kuliah"
              className="main-image"
            />
          </div>
        </div>
        <div className="main-content-box">
          <div className="main-content-item-image">
            <img src={ImageTree} alt="Information" className="main-image" />
          </div>
          <div className="main-content-item-text">
            <h2 className="heading-content">Information</h2>
            <p className="paragraf-content">
              Kami memberikan informasi mengenai tes masuk dunia perkuliahan
              seperti, SNMPTN, SBMPTN, Mandiri, SNMPN, Ujian Kedinasan, dan
              Mandiri PTS, agar kalian dapat mempersiapkan diri untuk mengikuti
              berbagai macam tes tersebut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
