import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Para navegação sem recarregar a página
import "../styles/components/Form_Denuncia.css"; // Importa o arquivo CSS separado

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
    <div className="denuncia-form-container">
      {/* Cabeçalho laranja */}
      <div className="denuncia-header"></div>
      
      <div className="denuncia-content">
        <h2 className="denuncia-titulo">
          DENÚNCIAS: INFORME IRREGULARIDADES DE DESCARTE INDEVIDO DE RESÍDUOS
        </h2>

        <form onSubmit={handleSubmit} className="formulario">
          {/* Localização do descarte indevido */}
          <div className="secao-form">
            <h3 className="secao-titulo">Localização do descarte indevido</h3>
            <div className="campos-grid">
              <div className="campo-grupo">
                <label className="campo-label">Zona:</label>
                <select
                  name="zona"
                  value={formData.zona}
                  onChange={handleChange}
                  className="campo-select"
                  required
                >
                  <option value="">Selecione uma zona</option>
                  <option value="norte">Zona Norte</option>
                  <option value="sul">Zona Sul</option>
                  <option value="leste">Zona Leste</option>
                  <option value="oeste">Zona Oeste</option>
                  <option value="centro">Centro</option>
                </select>
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
          </div>

          {/* Detalhes da denúncia */}
          <div className="secao-form">
            <h3 className="secao-titulo">Detalhes da denúncia</h3>
            <div className="campos-grid">
              <div className="campo-grupo">
                <label className="campo-label">Tipo de resíduo:</label>
                <select
                  name="tipoResiduo"
                  value={formData.tipoResiduo}
                  onChange={handleChange}
                  className="campo-select"
                  required
                >
                  <option value="">Selecione o tipo</option>
                  <option value="organico">Orgânico</option>
                  <option value="reciclavel">Reciclável</option>
                  <option value="perigoso">Resíduo Perigoso</option>
                  <option value="construcao">Resíduo de Construção</option>
                  <option value="eletronico">Eletrônico</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="campo-grupo">
                <label className="campo-label">Quantidade:</label>
                <select
                  name="quantidade"
                  value={formData.quantidade}
                  onChange={handleChange}
                  className="campo-select"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="pequena">Pequena</option>
                  <option value="media">Média</option>
                  <option value="grande">Grande</option>
                  <option value="muito-grande">Muito Grande</option>
                </select>
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

          {/* Botão de enviar */}
          <div className="botao-container">
            <button
              type="submit"
              className="botao-enviar"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DenunciaForm;