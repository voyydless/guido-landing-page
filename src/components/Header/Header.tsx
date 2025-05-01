import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div id="menu-btn" className={`fas fa-bars ${isMenuOpen ? 'fa-times' : ''}`} onClick={toggleMenu}></div>
      <a href="#" className="nome">
        <img src="/assets/images/name.png" width="150px" alt="Guido Café e Co." />
      </a>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">Sobre Nós</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#localizacao">Localização</a>
        <a href="#footer">Contato</a>
      </nav>
      <a href="#" className="logo2">
        <img src="/assets/images/logo2.png" width="55px" alt="Logo" />
      </a>
    </header>
  );
};

export default Header;