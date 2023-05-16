import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./test.css";

function RIASECTest() {
  const profilData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [scores, setScores] = useState({
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  });

  const username = profilData.username;
  scores.username = username;

  const present = new Date();
  const date = present.toLocaleDateString();
  const time = present.toLocaleTimeString();
  const timeFormat = `${date} ${time}`;
  const realDate = timeFormat.replace(/\//g, "-");
  scores.realDate = realDate;

  useEffect(() => {
    axios
      .get(
        "https://us-central1-capstone-project-382606.cloudfunctions.net/app/api/question"
      )
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);

    const currentQuestion = questions[currentQuestionIndex];
    const updatedScores = { ...scores };
    if (answer === "true") {
      updatedScores[currentQuestion.data.tipe_soal]++;
    }
    setScores(updatedScores);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://asia-southeast1-capstone-project-382606.cloudfunctions.net/app/api/submit",
        scores,
        username,
        realDate
      )
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userTest", JSON.stringify(response.data));
        navigate("/hasiltest");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(scores);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="main-box-content">
      <div className="navbar-test-page">
        <Link to="/test" className="back-btn">
          <i className="fa-sharp fa-solid fa-arrow-left back-btn-icon"></i>
          Kembali ke halaman awal
        </Link>
      </div>
      {currentQuestion ? (
        <div className="content-box-test">
          <div className="box-soal">
            <p className="no-soal">{currentQuestion.data.no}.</p>
            <h2 className="question-test">{currentQuestion.data.isi_soal}</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="btn-answer">
              <div className="btn-box">
                <input
                  className="btn-benar"
                  type="radio"
                  id="true"
                  name="answer"
                  value="true"
                  checked={currentQuestion.answer === "true"}
                  onChange={() => handleAnswerSelect("true")}
                />
                <label className="btn-benar-2" htmlFor="true">
                  Benar
                </label>
              </div>
              <div className="btn-box">
                <input
                  className="btn-salah"
                  type="radio"
                  id="false"
                  name="answer"
                  value="false"
                  checked={currentQuestion.answer === "false"}
                  onChange={() => handleAnswerSelect("false")}
                />
                <label className="btn-salah-2" htmlFor="false">
                  Salah
                </label>
              </div>
            </div>
            {currentQuestionIndex === questions.length - 1 ? (
              <button className="btn-response" type="submit">
                Submit
              </button>
            ) : (
              <div>
                <button
                  className="btn-response"
                  type="button"
                  onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex - 1)
                  }
                >
                  Previous
                </button>
                <button
                  className="btn-response"
                  type="button"
                  onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex + 1)
                  }
                >
                  Next
                </button>
              </div>
            )}
          </form>
        </div>
      ) : (
        <h1 className="loading">
          <span className="loader"></span>
        </h1>
      )}
    </div>
  );
}

export default RIASECTest;
