import React from 'react';
import './Location.css';

const Location: React.FC = () => {
  return (
    <section className="localizacao" id="localizacao">
      <div className="local">
        <h1 className="heading">Onde Estamos</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13832.58218379175!2d-51.1620149!3d-29.9177118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951971509c45e69d%3A0xdd32a7483b63ee29!2sGuido%20Caf%C3%A9%20%26%20Co.!5e0!3m2!1sen!2sbr!4v1716504502011!5m2!1sen!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>Av. Dr. Sezefredo Azambuja Viera, 1684 - Canoas</p>
        <p>Hórario de Funcionamento:</p>
        <p>Segunda - Sábado</p>
        <p>10:00 - 18:00</p>
      </div>
    </section>
  );
};

export default Location;