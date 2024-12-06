import React, { useRef, useEffect, useState } from 'react';
import filRougeSvg from '../../assets/svg/fil_rouge.svg';
import './filrouge.scss';

/*
  On simule l’animation : le fil est un long SVG avec un chemin sinueux.
  Le globule rouge est une petite pastille qui se déplace le long de ce chemin selon le scroll.
  Pour simplifier, on va juste faire bouger la position du globule en fonction du scroll, sans interpolation complexe.
*/

function FilRouge({ scrollYRatio }) {
  // scrollYRatio : un ratio 0 à 1 du scroll total
  // On déplace le globule sur le fil selon ce ratio.
  
  const [globulePos, setGlobulePos] = useState({x:0, y:0});
  // On va simplifier : juste une translation verticale. Dans un vrai code, utilisation d’un pathLength et d’un svg path.

  useEffect(() => {
    // Simule un tracé du fil :
    // On a par exemple 4 directions => On map le ratio à une Y value.
    const maxHeight = 1000; // hauteur max fictive
    const y = scrollYRatio * maxHeight;
    // x peut varier en fonction de segments (juste un petit calcul)
    const x = Math.sin(scrollYRatio * Math.PI * 2)*50;
    setGlobulePos({x,y});
  }, [scrollYRatio]);

  return (
    <div className="fil-rouge-container">
      {/* Représentation simplifiée : un div haut */}
      <div className="fil-rouge-line">
        {/* le globule rouge */}
        <div 
          className="globule-rouge" 
          style={{transform:`translate(${globulePos.x}px, ${globulePos.y}px)`}}
        ></div>
      </div>
    </div>
  );
}

export default FilRouge;
