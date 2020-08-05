import React from "react";
import { Link } from "react-router-dom"

import logImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import study from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={study} alt="Estudar" />
            Estudar
          </Link>

          <Link to="give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Classes" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões realizadas no dia de hoje!
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
