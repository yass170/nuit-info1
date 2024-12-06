import React from 'react';
import { Link } from 'react-router-dom';
import './organSection.scss';

function OrganSection({ organData }) {
  return (
    <div className="organ-section">
      <div className="bulle-texte">
        <h2>{organData.name}</h2>
        <p>{organData.description}</p>
        <p>Lien avec l'océan : {organData.oceanEquivalent}</p>
        <Link to={`/en-savoir-plus/humain/${organData.id}`} className="en-savoir-plus">En savoir plus</Link>
      </div>
      <img src={require(`../../assets/images/${organData.image}`)} alt={organData.name} className="organ-image"/>
    </div>
  );
}

export default OrganSection;
