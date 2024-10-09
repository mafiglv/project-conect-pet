import React from 'react';

function Header({ activeTab, setActiveTab }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="Logo ConectPet" />
          <h1>ConectPet</h1>
        </div>
        <nav className="header-nav">
          <a 
            href="#nos-conheca" 
            className={activeTab === 0 ? 'active' : ''} 
            onClick={() => setActiveTab(0)}
          >
            Nos Conheça
          </a>
          <a 
            href="#adote-com-amor" 
            className={activeTab === 1 ? 'active' : ''} 
            onClick={() => setActiveTab(1)}
          >
            Adote Com Amor
          </a>
          <a 
            href="#voluntarios" 
            className={activeTab === 2 ? 'active' : ''} 
            onClick={() => setActiveTab(2)}
          >
            Voluntários
          </a>
          <a 
            href="#doacoes" 
            className={activeTab === 3 ? 'active' : ''} 
            onClick={() => setActiveTab(3)}
          >
            Doações
          </a>
          <a href="/conecte-ong" className="header-link">
            Conecte-se com uma ONG
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
