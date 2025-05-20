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
    marginTop: "20px",
    flexWrap: "wrap",
    padding: "10px 10px 0",
    backgroundColor: "#2e2e2e",
    borderRadius: "10px",
    color: "white",
  }}
>
  {/* Componente de Informações */}
  
  <div style={{ textAlign: "left", minWidth: "180px" }}>
   <a href="../pages/coleta">Ecopontos</a>
    <p style={{ margin: "10px 0", fontSize: "14px" }}>
      Encontre pontos de coleta
    </p>
  </div>

  <div style={{ textAlign: "left", minWidth: "180px" }}>
    <a href="../pages/denuncia">Central de Denúncias</a>
    <p style={{ margin: "10px 0", fontSize: "14px" }}>
      Realize denúncias de descarte indevidos
    </p>
  </div>

  <div style={{ textAlign: "left", minWidth: "180px" }}>
    <a href="../pages/conscientizacao">Conscientização</a>
    <p style={{ margin: "10px 0", fontSize: "14px" }}>
      Saiba como e onde descartar seu lixo
    </p>
  </div>

  <div style={{ textAlign: "left", minWidth: "180px" }}>
    <a href="../pages/residuos">Resíduos</a>
    <p style={{ margin: "10px 0", fontSize: "14px" }}>
      Conheça o que pode ou não ser lixo
    </p>
  </div>
</div>

<p style={{ textAlign: "center", margin: "20px 0", fontSize: "18px", fontWeight: "bold" }}>Mapa de Ecopontos</p>

  {/* Mapa de Localização */}

  <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
  <iframe
    title="Mapa de Ecopontos"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127493.96627362698!2d-60.04950611539125!3d-3.0446589071499797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc8b37647b7%3A0x2b485c9ff765a9cc!2sManaus%2C%20AM!5e0!3m2!1spt-BR!2sbr!4v1747682622768!5m2!1spt-BR!2sbr"
    width="100%"
    height="350px"
    textAlign
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
  );
};

export default ImageCarousel;

