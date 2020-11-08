import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

import '../styles/landing.css';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <h1>Me nota!</h1>

        <main>
          <h1>Organize seus estudos</h1>
          <p>Agende suas provas, atividades e trabalhos.<br/>Adicione e edite notas, pesos e muito mais</p>
        </main>

        <div className="made-by">
          <strong>Criado por <a href="https://github.com/laianbraum" target="_blank">Laian</a></strong>
        </div>

        <Link to="/Home" className="enter-app">
          <FiArrowRight size= {30} color="#B433FF"/>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
