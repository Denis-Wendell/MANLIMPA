import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação sem recarregar a página
import { useState } from 'react';

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
    // Lógica para enviar os dados
    console.log('Dados do formulário:', formData);
    alert('Denúncia enviada com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        DENÚNCIAS: INFORME IRREGULARIDADES DE DESCARTE INDEVIDO DE RESÍDUOS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Zona */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Zona:</label>
          <select
            name="zona"
            value={formData.zona}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

        {/* Localização */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Localização do descarte indevido</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bairro:</label>
                <input
                  type="text"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rua:</label>
                <input
                  type="text"
                  name="rua"
                  value={formData.rua}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tipo de resíduo e detalhes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de resíduo:</label>
          <select
            name="tipoResiduo"
            value={formData.tipoResiduo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Detalhes da denúncia</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade:</label>
                <select
                  name="quantidade"
                  value={formData.quantidade}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="pequena">Pequena</option>
                  <option value="media">Média</option>
                  <option value="grande">Grande</option>
                  <option value="muito-grande">Muito Grande</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Anexo:</label>
                <input
                  type="file"
                  name="anexo"
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Descrição */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Descrição:</label>
        <textarea
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        ></textarea>
      </div>

      {/* Botão de enviar */}
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
          ENVIAR
        </button>
      </div>
    </form>
  );
};

export default DenunciaForm;