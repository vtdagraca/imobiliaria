import React from 'react';
import { Link } from 'react-router-dom';
import '../imoveis/imoveis.css';
import logo from '../../img/logo.png'; 
import logo2 from '../../img/logo2.png';

const phoneNumber = '5548998384426'; // Número de telefone no formato internacional
const message = 'Olá, gostaria de saber mais sobre seus serviços.';
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const ImoveisPage = () => {
  return (
    <div className='imv'>
      <div className="IfaixaBranca">
      <div className="content">
          <img src={logo2} alt="new content" className='logo22'/> 
        </div>
        <div className="content2">
          <div className="Chome">
            <Link to="/">
              <h3>Início</h3>
            </Link>
          </div>
          <div className="Iimoveis">
            <Link to="/imoveis">
              <h3>Imóveis</h3>
            </Link>
          </div>
          <div className="quemsou">
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
      <div className="destaques">
        <h2>Imóveis em Destaque:</h2>
        <div className="imoveis-container">
          <div className="imovel">
            <img src="https://www.cashme.com.br/blog/wp-content/uploads/2020/03/marco-12.jpg" alt="Destaque 1" />
            <div className="overlay">
              <h3>Imóvel 1</h3>
            </div>
          </div>
          <div className="imovel">
            <img src="https://cflimoveis.com.br/wp-content/uploads/2020/11/img-onde-comprar-um-imovel-de-alto-padrao-em-florianopolis.jpg" alt="Destaque 2" />
            <div className="overlay">
              <h3>Imóvel 2</h3>
            </div>
          </div>
          <div className="imovel">
            <img src="https://imoveis.estadao.com.br/wp-content/uploads/2022/02/GettyImages-1263902259-1024x683.jpg" alt="Destaque 3" />
            <div className="overlay">
              <h3>Imóvel 3</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="Iwpp">
        <img src={logo} alt="logo" className="Ilogo" />
      </div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button id='Ibt'>Fale Conosco no WhatsApp</button>
      </a>
      <div className='teste'>
        <h1>OLa eu sou o vitor <br />ola <br /> ola <br /> ola
        </h1>
      </div>
    </div>
  );
};

export default ImoveisPage;
