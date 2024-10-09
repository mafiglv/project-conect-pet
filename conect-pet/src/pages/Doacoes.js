import React from 'react';
import './Doacoes.css';

const Doacoes = () => {
  const itens = [
    { nome: 'Fancy Feast', preco: 'R$ 35.00', descricao: 'Ração de gato', img: process.env.PUBLIC_URL + '/assets/fancy-feast.png' },
    { nome: 'Iams', preco: 'R$ 54.00', descricao: 'Ração de gato', img: process.env.PUBLIC_URL + '/assets/iams.png' },
    { nome: 'nulo', preco: 'R$ 62.00', descricao: 'Ração de gato', img: process.env.PUBLIC_URL + '/assets/nulo.png' },
    { nome: 'Kibbles nBits', preco: 'R$ 28.00', descricao: 'Ração de cachorro', img: process.env.PUBLIC_URL + '/assets/kibbles-nbits.png' },
    { nome: 'Cesar', preco: 'R$ 46.00', descricao: 'Ração de cachorro', img: process.env.PUBLIC_URL + '/assets/cesar.png' },
    { nome: 'Happy dog', preco: 'R$ 76.00', descricao: 'Ração de cachorro', img: process.env.PUBLIC_URL + '/assets/happy-dog.png' },
    { nome: 'Shampoo', preco: 'R$ 10.00', descricao: 'qualquer marca', img: process.env.PUBLIC_URL + '/assets/shampoo.png' },
    { nome: 'Conta de Luz', preco: 'R$ 56.83', descricao: 'ONG LovePet', img: process.env.PUBLIC_URL + '/assets/conta-luz.png' },
    { nome: 'Medicamentos', preco: 'sem valor', descricao: 'qualquer tipo de medicação', img: process.env.PUBLIC_URL + '/assets/medicamentos.png' }
  ];

  return (
    <div className="doacoes-container">
      <div className="header-section">
        <img className="dog-img" src={process.env.PUBLIC_URL + '/assets/dog-image.png'} alt="Cachorro" />
        <h2>Nos Ajude</h2>
        <p>Minha barriguinha está vazia e estamos precisando de banho... Nos ajude!</p>
      </div>

      <div className="itens-grid">
        {itens.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.img} alt={item.nome} className="item-img" />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <p className="item-preco">{item.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doacoes;
