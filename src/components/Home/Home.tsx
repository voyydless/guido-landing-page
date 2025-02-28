import React from 'react';
import './Home.css';
import bg1 from '../../assets/images/bg1.png';

const Home: React.FC = () => {
  return (
    <section className="home" id="home" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="row">
        <div className="content">
          <h3><em>Cafés especiais com carinho</em></h3>
        </div>
      </div>
    </section>
  );
};

export default Home;