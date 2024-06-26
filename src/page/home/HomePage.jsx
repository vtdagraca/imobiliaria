import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../index.css'; 
import logo from '../../img/logo.png'; 
import logo2 from '../../img/logo2.png'; 
import logo3 from '../../img/logo3.png';
import logo22 from '../../img/logo22.png';

console.log(logo);

function HomePage() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/imoveis'); 
  };

  const phoneNumber = '5548998384426'; 
  const message = 'Olá, gostaria de saber mais sobre seus serviços.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="imagem">
      <div className="HfaixaBranca">
        <div className="content">
          <img src={logo2} alt="new content" className='logo22'/> 
        </div>
        <div className='Content1'>
          <a href={whatsappLink} id='number' target="_blank" rel="noopener noreferrer">
            48 99854-3737
          </a>
        </div>
        <div className='logowpp'>
          <img src={logo22} alt="new content" className='wpp2'/>
        </div>
        <div className="Hcontent2">
          <div className="Hhome">
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
          <div className="contato">
            <Link to="/contato">
              <h3>Contato</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="bemVindo">
        <div>     
          <div className="wpp">
            <img src={logo} alt="logo" className="logo" />
          </div>
          </div>
          <h3>Venha viver a vida dos sonhos em</h3>
          <div className="titulo">
            <h1>Florianópolis</h1>
          </div>
          <h3>Seu novo lar espera por você aqui!</h3>
          <button id="Hcomecar" onClick={handleButtonClick}>Comece já!</button>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button id='bt'>Fale Conosco no WhatsApp</button>
        </a>
        <img src={logo3} alt="new content" className='logo23'/>
      </div>
    </div>
  );
}

export default HomePage;
