import React from 'react';
import './MainContent.css';
import im1 from '../assets/cad.png';
import im2 from '../assets/att.png';
import im3 from '../assets/analise.png';
import { Link } from 'react-router-dom';

function MainContent() {
  return ( 
    <div className="main-content">
      <div className="header-content">
          <h1 className="bem-vindo">Bem-vindo(a) de volta, </h1>
        <button className="teste">
          <Link to={'/Login'} className="custom-link">Sair da conta</Link>
        </button>
      </div>
      <h1 className="tente">Gerente!</h1>
      <div className="image-gallery">
      <Link to={'/CadastroSala'} className="pfv"><img src={im2} /> </Link>
      <Link to={'/Equipamento'} className="pfv"><img src={im1} /> </Link>
      <Link to={'/Reservas'} className="pfv"><img src={im3} /> </Link>
      </div>
    </div>
  );
}

export default MainContent;
