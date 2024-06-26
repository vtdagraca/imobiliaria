import React from 'react';
import './index.css'; 
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import HomePage from './page/home/HomePage';
import ImoveisPage from './page/imoveis/ImoveisPage';
import QuemSouEuPage from './page/quemsoueu/QuemSouEuPage';
import ContatoPage from './page/contato/ContatoPage';



const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/imoveis" element={<ImoveisPage />} />
          <Route path="/quemsoueu" element={<QuemSouEuPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
    </Router>
  );
};

export default App;
