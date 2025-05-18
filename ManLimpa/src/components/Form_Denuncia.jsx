import React, { useState } from 'react';
import "../styles/components/Form_Denuncia.css";

const DenunciaForm = () => {
  const [formData, setFormData] = useState({
    zona: '',
    bairro: '',
    rua: '',
    tipoResiduo: '',
    quantidade: '',
    descricao: '',
    anexo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Denúncia enviada com sucesso!');
  };

  return (
    <div className="formulario-container">
      {/* Barra laranja */}
      <div className="barra-laranja"></div>
      
      {/* Título */}
      <div className="titulo-container">
        <h2 className="titulo-principal">
          DENÚNCIAS: INFORME IRREGULARIDADES DE DESCARTE INDEVIDO DE RESÍDUOS
        </h2>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit}>
        <div className="formulario-interno">
          {/* Localização */}
          <h3 className="secao-titulo">Localização do descarte indevido</h3>
          <div className="campos-row">
            <div className="campo-grupo">
              <label className="campo-label">Zona:</label>
              <input
                type="text"
                name="zona"
                value={formData.zona}
                onChange={handleChange}
                className="campo-input"
                required
              />
            </div>
            <div className="campo-grupo">
              <label className="campo-label">Bairro:</label>
              <input
                type="text"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                className="campo-input"
                required
              />
            </div>
            <div className="campo-grupo">
              <label className="campo-label">Rua:</label>
              <input
                type="text"
                name="rua"
                value={formData.rua}
                onChange={handleChange}
                className="campo-input"
                required
              />
            </div>
          </div>

          {/* Detalhes */}
          <h3 className="secao-titulo">Detalhes da denúncia</h3>
          <div className="campos-row">
            <div className="campo-grupo">
              <label className="campo-label">Tipo de resíduo:</label>
              <input
                type="text"
                name="tipoResiduo"
                value={formData.tipoResiduo}
                onChange={handleChange}
                className="campo-input"
                required
              />
            </div>
            <div className="campo-grupo">
              <label className="campo-label">Quantidade:</label>
              <input
                type="text"
                name="quantidade"
                value={formData.quantidade}
                onChange={handleChange}
                className="campo-input"
                required
              />
            </div>
            <div className="campo-grupo">
              <label className="campo-label">Anexo:</label>
              <input
                type="file"
                name="anexo"
                onChange={handleChange}
                className="campo-input"
              />
            </div>
          </div>

          {/* Descrição */}
          <div className="campo-grupo">
            <label className="campo-label">Descrição:</label>
            <textarea
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              rows={4}
              className="campo-textarea"
              required
            ></textarea>
          </div>
        </div>

        {/* Botão de enviar */}
        <div className="botao-container">
          <button type="submit" className="botao-enviar">ENVIAR</button>
        </div>
      </form>
    </div>
  );
};

export default DenunciaForm;