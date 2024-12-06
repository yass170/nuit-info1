import React from 'react';
import { Link } from 'react-router-dom';
import './oceanSection.scss';

function OceanSection({ oceanData }) {
  return (
    <div className="ocean-section">
      <div className="bulle-ocean-texte">
        <h2>{oceanData.name}</h2>
        <p>{oceanData.description}</p>
        <p>Équivalent humain : {oceanData.humanEquivalent}</p>
        <Link to={`/en-savoir-plus/ocean/${oceanData.id}`} className="en-savoir-plus">En savoir plus</Link>
      </div>
      <img src={require(`../../assets/images/${oceanData.image}`)} alt={oceanData.name} className="ocean-image"/>
    </div>
  );
}

export default OceanSection;
