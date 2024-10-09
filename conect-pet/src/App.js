import React, { useState } from 'react';
import Header from './components/Header';
import NosConheca from './pages/NosConheca';
import AdoteComAmor from './pages/AdoteComAmor';
import Voluntarios from './pages/Voluntarios';
import Doacoes from './pages/Doacoes';
import './App.css'; 

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <NosConheca />;
      case 1:
        return <AdoteComAmor />;
      case 2:
        return <Voluntarios />;
      case 3:
        return <Doacoes />;
      default:
        return <NosConheca />;
    }
  };

  return (
    <div className="app-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="content-area">
        {renderContent()}
      </main>
      <footer className="footer">
        <p>© 2024 ConectPet - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
