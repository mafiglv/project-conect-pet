import React from 'react';
import PetCard from '../components/PetCard'; // Componente de card para cada pet
import './AdoteComAmor.css'; // Estilos da página

function AdoteComAmor() {
  const pets = [
    { id: 1, name: "Gary", gender: "macho", age: "3 anos", breed: "Yorkshire Terrier", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Moon", gender: "fêmea", age: "1 anos", breed: "Siberian cat", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Spike", gender: "macho", age: "2.5 anos", breed: "Maine Coon", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Coxinha", gender: "macho", age: "5 anos", breed: "Half Breed", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Bola de Neve", gender: "fêmea", age: "0.5 anos", breed: "Samoyed", img: "https://via.placeholder.com/150" },
    { id: 6, name: "Kiwi", gender: "macho", age: "4 anos", breed: "Yorkshire Terrier", img: "https://via.placeholder.com/150" },
    { id: 7, name: "Whitney", gender: "fêmea", age: "3 meses", breed: "British Longhair", img: "https://via.placeholder.com/150" },
    { id: 8, name: "Buggy", gender: "macho", age: "7 anos", breed: "Jack Russel Terrier", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="adote-com-amor-container">
      <div className="header-section">
        <img className="dog-image" src="https://via.placeholder.com/200" alt="Cachorro sorridente" />
        <div className="title-section">
          <h1>ADOTE COM AMOR</h1>
          <p>Esses são alguns PETS que estão para adoção em algumas ONGS parceiras.</p>
        </div>
      </div>

      <div className="pets-grid">
        {pets.map((pet) => (
          <PetCard key={pet.id} name={pet.name} gender={pet.gender} age={pet.age} breed={pet.breed} img={pet.img} />
        ))}
      </div>
    </div>
  );
}

export default AdoteComAmor;
