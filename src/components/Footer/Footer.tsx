import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <section className="footer" id="footer">
      <nav className="navbar">
        <a href="#" target="_blank" className="link">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <br />
        <a href="#" target="_blank" className="link">
          <i className="fab fa-whatsapp"></i> Whatsapp
        </a>
        <br />
        <a href="#" target="_blank" className="link">
          <i className="fas fa-envelope"></i> E-mail
        </a>
        <br />
        <a href="#" target="_blank" className="link">
          Trabalhe Conosco
        </a>
      </nav>
      <div id="copyright">
        <p>Guido Café e Co. © 2024</p>
      </div>
    </section>
  );
};

export default Footer;