import React, { useState } from 'react';
import './MainContentCadastro.css';

function MainContentCadastro() {
  // Estado para armazenar quais botões estão ativos
  const [activeButtons, setActiveButtons] = useState(new Set());

  // Lista de horários diferentes para os botões
  const buttonTimes = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  // Função para lidar com o clique do botão
  const handleButtonClick = (index) => {
    setActiveButtons((prevActiveButtons) => {
      const newActiveButtons = new Set(prevActiveButtons);
      if (newActiveButtons.has(index)) {
        newActiveButtons.delete(index); // Remove o índice se já estiver ativo
      } else {
        newActiveButtons.add(index); // Adiciona o índice se não estiver ativo
      }
      return newActiveButtons;
    });
  };

  return (
    <div className="main-content">
      <form>
        <button className="teste">Avançar</button>
        <h1 className="cadastrar">Hora de cadastrar</h1>
        <h1 className="gerente">a sala!</h1>
        <div className="cadastro">
          <h2 className="tipo">Qual tipo de sala você gostaria de cadastrar?</h2>
        </div>
        <select className="inpcad">
          <option value="1">Sala de informática</option>
          <option value="2">Sala de informática para internet</option>
          <option value="3">Sala de Redes</option>
          <option value="4">Sala de Telecomunicações</option>
        </select>
        <div className="cadastro">
          <h2 className="tipo">Qual sala específica?</h2>
        </div>
        <select className="inpcad">
          <option value="1">Sala 1</option>
          <option value="2">Sala 2</option>
          <option value="3">Sala 3</option>
          <option value="4">Sala 4</option>
        </select>
      </form>
      <div className="cadastro">
        <h2 className="tipo">Qual será o horário específico?</h2>
      </div>
      <div className="galeriabuttons">
        {[...Array(7)].map((_, index) => (
          <button
            key={index}
            className={`horarios ${activeButtons.has(index) ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            {buttonTimes[index]}
          </button>
        ))}
      </div>
      <div className="galeriabuttons2">
        {[...Array(7)].map((_, index) => (
          <button
            key={index + 7}
            className={`horarios ${activeButtons.has(index + 7) ? 'active' : ''}`}
            onClick={() => handleButtonClick(index + 7)}
          >
            {buttonTimes[index + 7]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainContentCadastro;
