import React, { useState } from 'react';

export const CampanhaSalty = () => {
  const [formSalvo, setFormSalvo] = useState({
    nome:'',
    filial: '',
    periodo:'',
    meta:'',
    usuario:'',
    possibilidadeGanho:'',
    divisoes:''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormSalvo({
    ...formSalvo,
      [name]: value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Dados salvos', formSalvo)
}

    return(
        <div className='container'>
        <form className='form-usuario' id="itensFoco" onSubmit={handleSubmit} >

      <div>
        <h1 className='title-campanhas'>Campanha Salty</h1>
      </div>

        <div>
            <label>Nome</label>
            <input 
            className='input-campo-texto' 
            placeholder="Nome" 
            type='text'
            name="nome"
            value={formSalvo.nome}
            onChange={handleChange}
            />
          </div>

          <div>
          <label>Filial</label>
            <input 
            className='input-campo-texto' 
            placeholder="Filial" 
            type='text'
            name="filial"
            value={formSalvo.filial}
            onChange={handleChange}
            />
          </div>

          <div >
          <label>Periodo</label>
            <input 
            className='input-campo-texto' 
            placeholder="periodo" 
            type='text'
            name="periodo"
            value={formSalvo.periodo}
            onChange={handleChange}
            />
          </div>

          <div >
          <label>Meta</label>
            <input 
            className='input-campo-texto' 
            placeholder="meta" 
            type='text'
            name="meta"
            value={formSalvo.meta}
            onChange={handleChange}
            />
          </div>

          <div >
          <label>Usuario</label>
            <input 
            className='input-campo-texto' 
            placeholder="usuario" 
            type='text'
            name="usuario"
            value={formSalvo.usuario}
            onChange={handleChange}
            />
          </div>

          <div >
          <label>Possibilidade de ganho</label>
            <input 
            className='input-campo-texto' 
            placeholder="possibilidade de ganho" 
            type='text'
            name="possibilidadeGanho"
            value={formSalvo.possibilidadeGanho}
            onChange={handleChange}
            />
          </div>

          <div >
          <label>Divisões</label>
            <input 
            className='input-campo-texto' 
            placeholder="divisoes" 
            type='text'
            name="divisoes"
            value={formSalvo.divisoes}
            onChange={handleChange}
            />
          </div>

          <div>
            <button type='submit' id="btnSalvar" className='btn-criar-usuario'>Salvar</button>
        </div>

        </form>
        </div>

    )
}