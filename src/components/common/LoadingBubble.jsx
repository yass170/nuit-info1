import React, { useEffect, useState } from 'react';
import './loadingBubble.scss';

function LoadingBubble({ color = 'blue', onComplete }) {
  const [percent, setPercent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(p => {
        if (p < 100) return p + 1;
        clearInterval(interval);
        onComplete && onComplete();
        return 100;
      });
    }, 20); 
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-bubble-wrapper">
      <div className="loading-bubble">
        <div className={`bubble-liquid ${color}`} style={{height: `${percent}%`}}></div>
        <div className="percentage">{percent}%</div>
      </div>
    </div>
  );
}

export default LoadingBubble;
