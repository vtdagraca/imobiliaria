import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import '../../index.css'; // Certifique-se de que o caminho está correto

function HomePage() {
  const navigate = useNavigate(); // Hook useNavigate

  const handleButtonClick = () => {
    navigate('/imoveis'); // Navegar para a rota /imoveis ao clicar no botão
  };

  return (
    <div className="imagem">
      <div className="bemVindo">
        <h3>Venha viver a vida dos sonhos em</h3>
        <div className="titulo">
          <h1>Florianópolis</h1>
        </div>
        <h3>Seu novo lar espera por você aqui!</h3>
        <button id="comecar" onClick={handleButtonClick}>Comece já!</button>
      </div>
    </div>
  );
}

export default HomePage;
