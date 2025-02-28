import React, { useState } from 'react';
import './About.css';

const About: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="about" id="about">
      <h1 className="heading">Sobre Nós</h1>
      <div className="row">
        <div className="image">
          <img src="/assets/images/guido1.png" alt="Guido" />
        </div>
        <div className="content">
          <input id="ch" type="checkbox" checked={showInfo} onChange={() => setShowInfo(!showInfo)} />
          <h3 className="title">Afinal, por que Guido?</h3>
          <p>Quando decidimos abrir o café, tínhamos muito claro qual seria o seu conceito...</p>
          {showInfo && (
            <div className="info">
              <img src="/assets/images/grao.png" id="grao" alt="Grão de café" />
              <p>(Imagine informações sobre café aqui.)</p>
              <label htmlFor="ch" onClick={() => setShowInfo(false)}>Mostrar menos</label>
            </div>
          )}
          <label htmlFor="ch" onClick={() => setShowInfo(true)}>E o nosso café?</label>
        </div>
        <h3 id="parceiros">Em parceiria com:</h3>
        <div className="parceiros">
          <a href="https://loja.badentorrefacao.com.br" target="_blank" rel="noopener noreferrer" className="item">
            <img src="/assets/images/icon_baden.png" width="200px" alt="Baden" />
          </a>
          <a href="https://naveia.com.br" target="_blank" rel="noopener noreferrer" className="item">
            <img src="/assets/images/icon_naveia.png" width="200px" alt="Naveia" />
          </a>
          <a href="https://carmosina.store" target="_blank" rel="noopener noreferrer" className="item">
            <img src="/assets/images/icon_carmosina.png" width="200px" alt="Carmosina" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;