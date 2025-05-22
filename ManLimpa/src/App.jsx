import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./styles/base/tailwind.css";
import "./styles/base/base.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa componentes de layout
import Header from './components/Header';
import Footer from './components/Footer';

// Importa páginas
import Home from './pages/Home';
import Educacao from './pages/Educacao';
import Denuncia from './pages/Denuncia';
import Coleta from './pages/Coleta';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Removido w-full max-w-screen-xl mx-auto p-4 que estava limitando o layout */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/educacao" element={<Educacao />} />
          <Route path="/denuncia" element={<Denuncia />} />
          <Route path="/coleta" element={<Coleta />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;