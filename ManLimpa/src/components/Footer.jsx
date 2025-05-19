import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação sem recarregar a página
import '../styles/components/footer.css'; // Seu CSS customizado


const Footer = () => {
  return (
    <footer>
      <div className="text-sm">
        <strong>Gestão de resíduos em Manaus:</strong> Descubra como a cidade está trabalhando para um futuro mais sustentável!
      </div>
      <div className="flex">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagram.png" alt="Instagram" className="" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/facebook.png" alt="Facebook" className="" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/youtube.png" alt="YouTube" className="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;