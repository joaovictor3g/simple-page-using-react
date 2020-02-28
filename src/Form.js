import React from 'react';

import './Form.css';

function disparaNoClick() {
  alert('It worked')

}

const Form = () => (
    <div className="App" >
      <ul>
        <li>Fazer Café</li>
      </ul>
      <div id="input-group">
        <h1>Cadastro de Pessoas</h1>
        Nome:<input id="nome" type="text" placeholder="Digite seu nome"></input>
        RG:<input id="rg" type="text" placeholder="Digite seu rg"></input>
        CPF:<input id="cpf" type="text" placeholder="Digite seu cpf"></input>
        Idade:<input id="idade" type="number" placeholder="Digite sua idade"></input>
        <div id="button-group">
          <button id="salvar" type="submit" onClick={disparaNoClick}>Salvar</button>
          <button id="atualizar" type="submit" onClick={disparaNoClick}>Atualizar</button>
          <button id="excluir" type="submit" onClick={disparaNoClick}>Excluir</button>
        </div>
      </div>
    </div>
);

export default Form;