import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import "./history.css";

function History() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const profilData = JSON.parse(localStorage.getItem("userData"));
  const username = profilData.username;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://asia-southeast1-capstone-project-382606.cloudfunctions.net/app/api/history/${username}`
      )
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <h1>LOADING....</h1>
      ) : (
        <div className="history-main-box">
          <div className="header-history">
            <h1>History Test</h1>
          </div>
          <div className="box-data">
            {data.map((item, index) => (
              <div key={index}>
                <div className="item-data">
                  <div className="box-item-id">
                    <h1 className="item-id-header">Waktu Pengerjaan</h1>
                    <p className="item-id-content">{item.id}</p>
                  </div>
                  <div className="box-item-result">
                    <h1 className="item-result-header">Hasil Test</h1>
                    <p className="item-result">{item.data.result}</p>
                  </div>
                  <div className="box-parameter">
                    <h1 className="header-parameter">Nilai Parameter</h1>
                    <p className="item-parameter">Realistic : {item.data.R}</p>
                    <p className="item-parameter">
                      Investigative : {item.data.I}
                    </p>
                    <p className="item-parameter">Artistic : {item.data.A}</p>
                    <p className="item-parameter">Social : {item.data.S}</p>
                    <p className="item-parameter">Enterprising{item.data.E}</p>
                    <p className="item-parameter">
                      Conventional : {item.data.C}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default History;
