import React from 'react';
import { Link } from 'react-router-dom';
import './returnlink.scss';

function ReturnLink() {
  return (
    <div className="return-link">
      <Link to="/"> retour</Link>
    </div>
  );
}

export default ReturnLink;
