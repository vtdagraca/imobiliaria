import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import logo from '../../img/logo.png'; 
import logo2 from '../../img/logo2.png';
import logo3 from '../../img/logo3.png';
import casa1 from '../../img/casa1.jpg'; 
import casa2 from '../../img/casa2.jpg';
import casa3 from '../../img/casa3.jpg';
import '../imoveis/imoveis.css';

// Registrar módulos
SwiperCore.use([Navigation, Pagination, Autoplay]);

const phoneNumber = '5548998543737';
const message = 'Olá, gostaria de saber mais sobre seus serviços.';
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const ImoveisPage = () => {
  return (
    <div className='imv'>
      <div className="IfaixaBranca">
        <div className="content">
          <img src={logo2} alt="Logo2" className='logo22'/> 
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
      <div className='container'>
        <h1 id='destaques'>Imóveis em destaque:</h1>
        
        <Swiper
          className="swiper-container-custom"
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }} 
          pagination={{ clickable: true }}
          navigation
        >
          <SwiperSlide>
            <div className="slide-content">
              <img src={casa1} alt="Casa 1" className="slide-item" />
              <div className="neighborhood">Rio Vermelho</div>
              <div className="price-tag">R$ 500.000</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={casa2} alt="Casa 2" className="slide-item" />
              <div className="neighborhood">Centro</div>
              <div className="price-tag">R$ 600.000</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={casa3} alt="Casa 3" className="slide-item" />
              <div className="neighborhood">Ingleses</div>
              <div className="price-tag">R$ 700.000</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="Iwpp">
        <img src={logo} alt="Logo" className="Ilogo" />
      </div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button id='Ibt'>Fale Conosco no WhatsApp</button>
      </a>
      <div className='negocio'>
        <div className='ache'>
          Ache aqui
          <br />
          o seu
          <br /> 
          imóvel
          <br />
          ideal!
        </div>
        <div className='imgNegocio'>
          <img src={logo3} alt="Logo3" className='logoNegocio'/> 
        </div>
        <div className='pesquisa'>
          
        </div>
      </div>
    </div>
  );
};

export default ImoveisPage;
