import React from 'react';
import { Link } from 'react-router-dom';
import '../quemsoueu/quemsoueu.css';
import logo2 from '../../img/logo2.png';

const QuemSouEuPage = () => {
  return (
    <div className='qse'>
      <div className="QfaixaBranca">
      <div className="content">
          <img src={logo2} alt="new content" className='logo22'/> 
        </div>
        <div className="content2">
          <div className="Chome">
            <Link to="/">
              <h3>Início</h3>
            </Link>
          </div>
          <div className="Iimoveis2">
            <Link to="/imoveis">
              <h3>Imóveis</h3>
            </Link>
          </div>
          <div className="Qquemsou">
            <Link to="/quemsoueu">
              <h3>Quem Sou Eu</h3>
            </Link>
          </div>
          <div className="Ccontato2">
            <Link to="/contato">
              <h3>Contato</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSouEuPage;
