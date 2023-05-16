import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./content/home/home";
import Information from "./content/information/information";
import Fakultas from "./content/fakultas/fakultas";
import DetailFakultas from "./content/detailFakultas/detail";
import "./App.css";
import TestPage from "./content/testPage/testpage";
import Test from "./content/testPage/test/test";
import Login from "./content/login/login";
import Register from "./content/register/register";
import Profil from "./content/profil/profil";
import Penjelasan from "./content/penjelasanRIASEC/penjelasan";
import HasilTest from "./content/hasilTest/hasiltest";
import History from "./content/history/history";

function App() {
  return (
    <Routes>
      <Route path="/profil" element={<Profil />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/information" element={<Information />} />
      <Route path="/fakultas">
        <Route index element={<Fakultas />} />
        <Route path=":name">
          <Route index element={<DetailFakultas />} />
        </Route>
      </Route>
      <Route path="/test" element={<TestPage />} />
      <Route path="/test1" element={<Test />} />
      <Route path="/penjelasan" element={<Penjelasan />} />
      <Route path="/hasiltest" element={<HasilTest />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
