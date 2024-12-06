import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingBubble from '../components/common/LoadingBubble';
import NavBar from '../components/common/NavBar';
import ReturnLink from '../components/common/ReturnLink';
import organs from '../data/organs.json';
import oceanElements from '../data/oceanElements.json';
import '../styles/pages/enSavoirPlusPage.scss';

function EnSavoirPlusPage() {
  const { type, id } = useParams();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    let item = null;
    if(type==='humain') {
      item = organs.find(o=>o.id===id);
    } else {
      item = oceanElements.find(o=>o.id===id);
    }
    setData(item);
  }, [type, id]);

  function handleComplete() {
    // après le chargement
    setTimeout(()=> setShowContent(true), 1000);
    setTimeout(()=> setLoading(false), 1100);
  }

  return (
    <div className="en-savoir-plus-page">
      {loading && <LoadingBubble color="blue" onComplete={handleComplete}/>}
      <NavBar/>
      <ReturnLink/>
      <div className={`content-area ${showContent ? 'visible':'blurred'}`}>
        {data ? (
          <>
            <div className="description-container">
              <h1>{data.name}</h1>
              <p>{data.detailedInfo}</p>
              {type==='humain' ? (
                <p>Equivalent océanique : {data.oceanEquivalent}</p>
              ):(
                <p>Equivalent humain : {data.humanEquivalent}</p>
              )}
            </div>
            <div className="background-image">
              {type==='humain' ?
                <img src={require('../assets/images/fond_marins1.jpg')} alt="fond humain" /> :
                <img src={require('../assets/images/fond_marins2.jpg')} alt="fond ocean" />
              }
            </div>
          </>
        ) : (
          <p>Aucune donnée trouvée.</p>
        )}
      </div>
    </div>
  );
}

export default EnSavoirPlusPage;
