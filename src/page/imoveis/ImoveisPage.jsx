import React from 'react';
import { Link } from 'react-router-dom';
import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide} from 'swiper/react';

import '../imoveis/imoveis.css';
import logo from '../../img/logo.png'; 
import logo2 from '../../img/logo2.png';

register();

const phoneNumber = '5548998384426'; 
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
      <Swiper>
        <SwiperSlide>
          
        </SwiperSlide>
      </Swiper>
      <div className="Iwpp">
        <img src={logo} alt="logo" className="Ilogo" />
      </div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button id='Ibt'>Fale Conosco no WhatsApp</button>
      </a>
    </div>
  );
};

export default ImoveisPage;
