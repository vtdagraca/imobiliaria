import React from 'react';
import './index.css'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './page/home/HomePage';
import ImoveisPage from './page/imoveis/ImoveisPage';
import QuemSouEuPage from './page/quemsoueu/QuemSouEuPage';
import ContatoPage from './page/contato/ContatoPage';

import logo from '../src/img/logo.png'; 

const App = () => {
  return (
    <Router>
      <div>
        <div className="faixaBranca">
          <div className="content">
            <h3>
              Cristina Corretora
              <br />
              SC
            </h3>
          </div>
          <div className="content2">
            <div className="home">
              <Link to="/">
                <h3>Home</h3>
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
        <div className="wpp">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/imoveis" element={<ImoveisPage />} />
          <Route path="/quemsoueu" element={<QuemSouEuPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
