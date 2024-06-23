import React from 'react';
import { Link } from 'react-router-dom';
import '../contato/contato.css';
import logo2 from '../../img/logo2.png';

function ContatoPage() {
  return (
    <div className='ctt'>    
      <div className="CfaixaBranca">
        <div className="content">
          <img src={logo2} alt="new content" className='logo22'/> 
        </div>
        <div className="content2">
          <div className="Chome">
            <Link to="/">
              <h3>Início</h3>
            </Link>
          </div>
          <div className="imoveis">
            <Link to="/imoveis">
              <h3>Imóveis</h3>
            </Link>
          </div>
          <div className="quemsou">
            <Link to="/quemsoueu">
              <h3>Quem Sou Eu</h3>
            </Link>
          </div>
          <div className="Ccontato">
            <Link to="/contato">
              <h3>Contato</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContatoPage;
