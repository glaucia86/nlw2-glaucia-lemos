import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/1631477?s=460&u=d1e8f57cc23c3b13a8a7e35b099027c7ac9f059b&v=4"
          alt="Glaucia Lemos"
        />
        <div>
          <strong>
            Glaucia Lemos
            <span> Node.js/JavaScript </span>
          </strong>
        </div>
      </header>

      <p>
        Glaucia Lemos é Cloud Advocate em JavaScript/Node.js 🥑 na Microsoft.
        Ama realizar contribuições em projetos Open Source.
        <br />
        <br />
        Atua como Member/Contributor no Node.js Foundation e no React Community
        realizando contribuições nas traduções do site Nodejs.org e Reactjs.org
        para o português e também é Volunteer & Tech Speaker do WoMakersCode.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 150,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Botão de Contato do WhatsApp" />
          Entre em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
