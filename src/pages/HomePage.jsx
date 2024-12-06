import React, { useEffect, useState } from 'react';
import FilRouge from '../components/home/FilRouge';
import OrganSection from '../components/home/OrganSection';
import OceanSection from '../components/home/OceanSection';
import AnimatedSeparator from '../components/common/AnimatedSeparator';
import organs from '../data/organs.json';
import oceanElements from '../data/oceanElements.json';
import { Link } from 'react-router-dom';
import '../styles/pages/homePage.scss';

function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    // Attendre le render pour calc docHeight
    setTimeout(()=> {
      setDocHeight(document.body.scrollHeight - window.innerHeight);
    },100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollRatio = docHeight > 0 ? scrollY/docHeight : 0;

  // Ordre d’affichage
  const organAppear = [
    {organ: organs.find(o=>o.id==='lungs'), start:0.1, end:0.2},
    {organ: organs.find(o=>o.id==='bone'), start:0.3, end:0.4},
    {organ: organs.find(o=>o.id==='heart'), start:0.5, end:0.6},
  ];

  const oceanAppear = [
    {elem: oceanElements.find(e=>e.id==='plancton'), start:0.1, end:0.2},
    {elem: oceanElements.find(e=>e.id==='corail'), start:0.3, end:0.4},
    {elem: oceanElements.find(e=>e.id==='courants'), start:0.5, end:0.6},
  ];

  return (
    <div className="home-page">
      <AnimatedSeparator/>
      <div className="split-container">
        <div className="left-side">
          <FilRouge scrollYRatio={scrollRatio}/>
          <div className="organ-sections">
            {organAppear.map((o,i) => 
              (scrollRatio > o.start && scrollRatio < o.end) && <OrganSection key={i} organData={o.organ}/>
            )}
          </div>
        </div>
        <div className="right-side">
          <div className="ocean-surface"></div>
          <div className="ocean-depth">
            {oceanAppear.map((el,i)=>
              (scrollRatio > el.start && scrollRatio < el.end) && <OceanSection key={i} oceanData={el.elem}/>
            )}
          </div>
        </div>
      </div>
      <div className="quiz-link">
        <Link to="/quiz" className="quiz-button">As-tu tout retenu ? (Quiz)</Link>
      </div>
    </div>
  );
}

export default HomePage;
