import React from "react";
import Slider from "react-slick";

const images = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/1.png",
  "/assets/2.png",
];

const infoCards = [

  /* Componente de informações */

  {
    title: "Ecopontos",
    description: "Encontre pontos de coleta",
  },
  {
    title: "Central de Denúncias",
    description: "Realize denúncias de descarte indevidos",
  },
  {
    title: "Conscientização",
    description: "Saiba como e onde descartar seu lixo",
  },
  {
    title: "Resíduos",
    description: "Conheça o que pode ou não ser lixo",
  },
];

// Componente de Carrossel de Imagens

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

// Configurações do carrossel
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-6">
      {/* Carrossel de Imagens */}
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="px-2">
            <img
              src={src}
              alt={`Imagem ${i + 1}`}
              className="w-full h-[200px] object-contain rounded-xl"
            />
          </div>
        ))}
      </Slider>

     <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "200px",
    marginTop: "5px",
    flexWrap: "wrap",
    padding: "10px 0 10px 10px",
    backgroundColor: "#2e2e2e",
    borderRadius: "10px",
    color: "white",
  }}
>
  {/* Componente de Informações */}

  <div style={{ textAlign: "left", minWidth: "100px" }}>
    <a href="../pages/coleta">Ecopontos</a>
    <p style={{ margin: "10px 0", fontSize: "14px" }}>
      Encontre pontos de coleta
    </p>
  </div>

  <div style={{ textAlign: "left", minWidth: "10px" }}>
    <a href="../pages/denuncia">Central de Denúncias</a>
    <p style={{ margin: "5px 0", fontSize: "14px" }}>
      Realize denúncias de descarte indevidos
    </p>
  </div>

  <div style={{ textAlign: "left", minWidth: "180px" }}>
    <a href="../pages/conscientizacao">Conscientização</a>
    <p style={{ margin: "5px 0", fontSize: "14px" }}>
      Saiba como e onde descartar seu lixo
    </p>
  </div>

  <div style={{ textAlign: "left", minWidth: "180px" }}>
    <a href="../pages/residuos">Resíduos</a>
    <p style={{ margin: "5px 0", fontSize: "14px" }}>
      Conheça o que pode ou não ser lixo
    </p>
  </div>
</div>

{/* Componente de Impacto Ambiental */}

  <div
  style={{
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#2e2e2e",
    borderRadius: "10px",
    color: "white",
    textAlign: "center",
  }}
>
  <h2 style={{ fontSize: "30px", marginBottom: "1px", fontWeight: "bold" }}>
    Impacto Positivo em Manaus 🌱
  </h2>
  <br />
  <p style={{ fontSize: "16px", marginBottom: "10px" }}>
    ♻️ Mais de <strong>1.200 toneladas</strong> de resíduos recicláveis coletados em 2024
  </p>
  <p style={{ fontSize: "16px", marginBottom: "10px" }}>
    🌍 Redução estimada de <strong>3.500 toneladas de CO₂</strong> na atmosfera
  </p>
  <p style={{ fontSize: "16px", marginBottom: "10px" }}>
    ♻️ Mais de <strong>1.000 toneladas</strong> de resíduos recicláveis coletados em 2023
    💚 Mais de <strong>200 ecopontos</strong> ativos ajudando a construir uma cidade mais sustentável!
  </p>
</div>

    </div>
  );
};

export default ImageCarousel;

