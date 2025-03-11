import React, { useState } from 'react';
import './About.css';

const About: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggle = () => {
    setShowInfo(!showInfo);
  };

  return (
    <section className="about" id="about">
      <h1 className="heading">Sobre Nós</h1>
      <div className="row">
        <div className="image">
          <img src="/assets/images/guido1.png" alt="Guido" />
        </div>
        <div className="content">
          <input 
          id="coffee-info" 
          type="checkbox" 
          checked={showInfo} 
          onChange={(e) => setShowInfo(e.target.checked)} 
          style={{ display: 'none'}}/>
          <h3 className="title">Afinal, por que Guido?</h3>
          <p>Quando decidimos abrir o café, tínhamos muito claro qual seria o seu conceito: um café com memória afetiva, carismático, basicão e acolhedor para todos. Quer dizer, queríamos um "café vira-lata". Testamos vários nomes até percebermos que nossa inspiração estava dentro da nossa própria casa: <strong>Guido!</strong> Nosso vira-lata carismático.</p>

          {!showInfo && (
          <button
            className="toggle-info"
            onClick={handleToggle}>
            E o nosso café?
          </button>
          )}
          {showInfo && (
            <div className="info">
              <img src="/assets/images/grao.png" id="grao" alt="Grão de café" />
              <p>(Imagine informações sobre café aqui.)
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis velit enim, eleifend ac libero at, scelerisque vestibulum dui. Curabitur at mi a augue varius posuere. Nullam nec lacus et quam vulputate mattis. Donec fermentum sem at dignissim porttitor. Aliquam eget sapien id ligula tristique semper. Nunc lorem leo, blandit eu nisl sed, viverra consectetur augue. Quisque id dictum velit.
              </p>
              <button 
              className="toggle-info"
              onClick={handleToggle}>
                Mostrar menos
              </button>
            </div>
          )}
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