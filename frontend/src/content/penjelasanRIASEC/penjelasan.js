import React from "react";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import DataPenjelasan from "./datapenjelasan/datapenjelasan";
import "./penjelasan.css";

function Penjelasan() {
  return (
    <>
      <Navbar />
      <DataPenjelasan />
      <Footer />
    </>
  );
}

export default Penjelasan;
