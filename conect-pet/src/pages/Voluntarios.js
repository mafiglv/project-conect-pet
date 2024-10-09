import React from 'react';
import './Voluntarios.css'; // Estilos da página

function Voluntarios() {
  return (
    <div className="voluntarios-container">
      <div className="header-section">
        <img 
          className="dog-image" 
          src="https://via.placeholder.com/200" 
          alt="Cachorro sorridente"
        />
        <div className="title-section">
          <h1>SEJA UM VOLUNTÁRIO</h1>
          <p>Uma solução tecnológica para conectar vidas e transformar o futuro dos animais de rua.</p>
        </div>
      </div>

      <div className="info-section">
        <img 
          className="volunteer-image" 
          src="https://via.placeholder.com/300" 
          alt="Voluntária segurando cachorro"
        />
        <div className="info-text">
          <p>
            Quer ajudar a transformar a vida dos animais de rua? Descubra a ONG que mais combina com você, 
            participe de suas ações e faça a diferença sendo um voluntário. Juntos, podemos oferecer uma nova 
            chance para quem mais precisa.
          </p>
          <button className="cta-button">SEJA VOLUNTÁRIO</button>
        </div>
      </div>
    </div>
  );
}

export default Voluntarios;
