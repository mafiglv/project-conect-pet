import React from 'react';
import './PetCard.css';

function PetCard({ name, gender, age, breed, img }) {
  return (
    <div className="pet-card">
      <img src={img} alt={name} className="pet-image" />
      <div className="pet-info">
        <h2>{name}</h2>
        <p>{gender} - {age}</p>
        <p>{breed}</p>
      </div>
    </div>
  );
}

export default PetCard;
