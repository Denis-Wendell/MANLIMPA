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
               <select
                  name="zona"
                  value={formData.zona}
                  onChange={handleChange}
                  className="campo-input"
                  required >
                  <option value="">Selecione uma zona</option>
                  <option value="Norte">Norte</option>
                  <option value="Sul">Sul</option>
                  <option value="Leste">Leste</option>
                  <option value="Oeste">Oeste</option>
                  <option value="Centro">Centro</option>
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
                placeholder='Ex: Centro, Flores, etc.'
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
                placeholder='Ex: Rua das Flores, Av. Brasil, etc.'
              />
            </div>
          </div>

          {/* Detalhes */}
          <h3 className="secao-titulo">Detalhes da denúncia</h3>
          <div className="campos-row">
            <div className="campo-grupo">
              <label className="campo-label">Tipo de resíduo:</label>
              <select
                type="text"
                name="tipoResiduo"
                value={formData.tipoResiduo}
                onChange={handleChange}
                className="campo-input"
                required
              >
                <option value="">Selecione um tipo de resíduo</option>
                <option value="Resíduos Domiciliares">Resíduos Domiciliares: Provenientes de residências (restos de alimentos, papéis, plásticos, etc.</option>  
                <option value="Resíduos de Limpeza Urbana">Resíduos de Limpeza Urbana: Gerados pela limpeza de ruas, praças e logradouros. </option>  
                <option value="Resíduos Industriais">Resíduos Industriais: Resultantes de atividades industriais, como resíduos de processos de fabricação. </option>  
                <option value="Resíduos de Serviços de Saúde (RSS)">Resíduos de Serviços de Saúde (RSS): Gerados em hospitais, clínicas, etc. (agulhas, luvas, etc.). </option>  
                <option value="Resíduos de Construção Civil">Resíduos de Construção Civil: Entulho, materiais de demolição, etc. </option>  
                <option value="Resíduos Radioativos">Resíduos Radioativos: Provenientes de fontes radioativas, como urânio. </option>  
                <option value="Resíduos Agrícolas">Resíduos Agrícolas: Provenientes de atividades agrícolas, como restos de colheita. </option>  
              </select>
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
                placeholder='Ex: 2kg, 3 sacos, etc.'
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
              placeholder='Descreva a situação, incluindo detalhes como horário, frequência, etc.'
            ></textarea>
          </div>
        </div>

        {/* Botão de enviar */}
        <div className="botao-container">
          <button type="submit" className="botao-enviar">ENVIAR</button>
        </div>
      </form>
       <br/>
    </div>
  );
};

export default DenunciaForm;