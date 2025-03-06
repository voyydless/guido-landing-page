import React, { useState } from 'react';
import { coffeeItems, filtradosItems, padocaItems } from './MenuItems';
import './Menu.css';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cafes');

  const openMenu = (menuName: string) => {
    setActiveTab(menuName);
  };

  return (
    <section className= "menu" id="cardapio">
      <h1 className= "heading">Cardápio</h1>
      <div className= "tab">
        <button className= {`tablinks ${activeTab === 'cafes' ? 'active' : ''}`} onClick={() => openMenu('cafes')}>Cafés</button>
        <button className= {`tablinks ${activeTab === 'filtrados' ? 'active' : ''}`} onClick={() => openMenu('filtrados')}>Filtrados</button>
        <button className= {`tablinks ${activeTab === 'padoca' ? 'active' : ''}`} onClick={() => openMenu('padoca')}>Padoca</button>
      </div>
      <div id= "cafes" className= {`tabcontent ${activeTab === 'cafes' ? 'active' : ''}`}>
        <div className= "menu-grid">
          <div className= "menu-column">
            {coffeeItems.slice(0, Math.ceil(coffeeItems.length / 2)).map((item, index) => (
              <article key= {`left-${index}`} className= "menu-item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><em>R$ {item.price}</em></p>
                </article>
            ))}
          </div>
          <div className= "menu-column">
            {coffeeItems.slice(Math.ceil(coffeeItems.length / 2)).map((item, index) => (
              <article key= {`right-${index}`} className= "menu-item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><em>R$ {item.price}</em></p>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      <div id= "filtrados" className= {`tabcontent ${activeTab === 'filtrados' ? 'active' : ''}`}>
        <div className= "menu-grid">
          <div className= "top-row">
            {filtradosItems.slice(0, 2).map((item, index) => (
              <article key= {`left-${index}`} className= "menu-item">
                  <h3>{item.name}</h3>
                  <p className="size">{item.size}</p>
                  {item.image && <img src={item.image} alt={item.name} />}
                  <p className="price">
                  <em>R$ {item.prices.small} | R$ {item.prices.large}</em>
                  </p>
                  <p className="description">{item.description}</p>
              </article>
            ))}
            </div>
            <div className= "bottom-row">
              {filtradosItems.slice(2).map((item, index) => (
                <article key= {`filtrado-bottom-${index}`} className= "menu-item">
                  <h3>{item.name}</h3>
                  <p className="size">{item.size}</p>
                  {item.image && <img src={item.image} alt={item.name} />}
                  <p className="price">
                    <em>R$ {item.prices.small}</em>
                  </p>
                  <p className="description">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
      </div>

      <div id="padoca" className={`tabcontent ${activeTab === 'padoca' ? 'active' : ''}`}>
        <div className="menu-grid">
          <div className = "menu-column">
            {padocaItems.slice(0, Math.ceil(padocaItems.length / 2)).map((item, index) => (
              <article key={`left-${index}`} className="menu-item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><em>R$ {item.price}</em></p>
              </article>
            ))}
          </div>
          <div className = "menu-column">
            {padocaItems.slice(Math.ceil(padocaItems.length / 2)).map((item, index) => (
              <article key={`right-${index}`} className="menu-item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><em>R$ {item.price}</em></p>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      <p id="leite"><em>*Em todas as bebidas, o leite é substituível por leite sem lactose ou leite vegetal Naveia®.</em></p>
    </section>
  );
};

export default Menu;