import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <section className="footer" id="footer">
      <nav className="navbar">
        <a href="https://www.instagram.com/guidocafe.co/" target="_blank" rel="noopener noreferrer" className="link">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <br />
        <a href="https://api.whatsapp.com/send/?phone=555134766802&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="link">
          <i className="fab fa-whatsapp"></i> Whatsapp
        </a>
        <br />
        <a href="mailto:falecomoguido@guidocafe.com.br" target="_blank" rel="noopener noreferrer" className="link">
          <i className="fas fa-envelope"></i> E-mail
        </a>
        <br />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfo1iJBdNDhS9lzo-qSP0GGL3kk3SyzUqGyoePiiosCi5z5Pg/viewform" target="_blank" rel="noopener noreferrer" className="link">
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