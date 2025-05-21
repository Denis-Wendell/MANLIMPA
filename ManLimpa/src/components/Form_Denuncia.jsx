import React, { useState, useEffect } from 'react';
import denunciaService from '../services/denunciaService';
import tipoResiduoService from '../services/tipoResiduoService';
import "../styles/components/Form_Denuncia.css";

const Form_Denuncia = () => {
  const [formData, setFormData] = useState({
    zona: '',
    bairro: '',
    rua: '',
    tipo_residuo: '',
    quantidade: '',
    descricao: '',
    anexo_path: ''
  });

  const [tiposResiduo, setTiposResiduo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });

  // Carregar tipos de resíduo ao montar o componente
  useEffect(() => {
    const carregarTiposResiduo = async () => {
      try {
        const tipos = await tipoResiduoService.getAllTiposResiduo();
        setTiposResiduo(tipos);
      } catch (error) {
        console.error('Erro ao carregar tipos de resíduo:', error);
        // Se falhar ao carregar da API, usamos os dados estáticos
        setTiposResiduo([
          { id: 1, nome: 'Resíduos Domiciliares', descricao: 'Provenientes de residências (restos de alimentos, papéis, plásticos, etc.)' },
          { id: 2, nome: 'Resíduos de Limpeza Urbana', descricao: 'Gerados pela limpeza de ruas, praças e logradouros' },
          { id: 3, nome: 'Resíduos Industriais', descricao: 'Resultantes de atividades industriais, como resíduos de processos de fabricação' },
          { id: 4, nome: 'Resíduos de Serviços de Saúde (RSS)', descricao: 'Gerados em hospitais, clínicas, etc. (agulhas, luvas, etc.)' },
          { id: 5, nome: 'Resíduos de Construção Civil', descricao: 'Entulho, materiais de demolição, etc.' },
          { id: 6, nome: 'Resíduos Radioativos', descricao: 'Provenientes de fontes radioativas, como urânio' },
          { id: 7, nome: 'Resíduos Agrícolas', descricao: 'Provenientes de atividades agrícolas, como restos de colheita' }
        ]);
      }
    };

    carregarTiposResiduo();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
      anexo_path: name === 'anexo' && files ? files[0].name : formData.anexo_path
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Adaptar o objeto para o formato esperado pelo backend
      const dadosParaEnviar = {
        zona: formData.zona,
        bairro: formData.bairro,
        rua: formData.rua,
        tipo_residuo: formData.tipo_residuo,
        quantidade: formData.quantidade,
        descricao: formData.descricao,
        anexo_path: formData.anexo_path
      };
      
      // Enviar os dados para a API
      await denunciaService.createDenuncia(dadosParaEnviar);
      
      // Mostrar mensagem de sucesso
      setMensagem({
        texto: 'Denúncia enviada com sucesso! Agradecemos sua contribuição para uma cidade mais limpa.',
        tipo: 'sucesso'
      });
      
      // Limpar o formulário
      setFormData({
        zona: '',
        bairro: '',
        rua: '',
        tipo_residuo: '',
        quantidade: '',
        descricao: '',
        anexo_path: ''
      });
      
      // Exibir alerta
      alert('Denúncia enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar denúncia:', error);
      
      // Mostrar mensagem de erro
      setMensagem({
        texto: `Erro ao enviar denúncia: ${error.message}`,
        tipo: 'erro'
      });
      
      alert('Erro ao enviar denúncia. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
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

      {/* Mensagem de status, se houver */}
      {mensagem.texto && (
        <div className={`mensagem ${mensagem.tipo}`}>
          {mensagem.texto}
        </div>
      )}

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
                name="tipo_residuo"
                value={formData.tipo_residuo}
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
          <button 
            type="submit" 
            className="botao-enviar"
            disabled={isLoading}
          >
            {isLoading ? 'ENVIANDO...' : 'ENVIAR'}
          </button>
        </div>
      </form>
      <br/>
    </div>
  );
};

export default Form_Denuncia;