import React from 'react';
import wave from '../../assets/svg/vague_separatrice.svg';
import './animatedSeparator.scss';

function AnimatedSeparator() {
  return (
    <div className="animated-separator">
      <img src={wave} alt="separator" className="wave-separator" />
    </div>
  );
}

export default AnimatedSeparator;
