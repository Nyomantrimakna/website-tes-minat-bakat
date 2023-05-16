import React, { useEffect } from "react";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import "./testpage.css";
import { Outlet, Link } from "react-router-dom";

function TestPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="test-container">
        <h1 className="header-test-page">Aturan</h1>
        <p className="paragraf-test-page">
          Untuk mengetahui kepribadian apa yang anda miliki dan penjurusan apa
          yang cocok dengan diri anda, maka kalian harus menjawab 30 pertanyaan
          yang telah disediakan. Beberapa ketentuan dalam test ini adalah :
        </p>
        <ul className="list-ketentuan">
          <li className="ketentuan">Jawablah dengan sejujur-jujur nya</li>
          <li className="ketentuan">
            Wajib menjawab semua pertanyaan yang ada
          </li>
          <li className="ketentuan">Tidak ada durasi pengerjaan soal</li>
        </ul>
        <p className="paragraf-test-page">
          Apabila tidak mengikuti ketentuan berikut, maka hasil yang di dapat
          tidak akan maksimal.
        </p>
        <h2 className="header-2">Selamat Mengerjakan!</h2>
        <div className="btn-mulai-box">
          <Link to="/test1" className="btn-mulai">
            Mulai
          </Link>
        </div>
      </div>
      <Footer />
      <Outlet />
    </>
  );
}

export default TestPage;
