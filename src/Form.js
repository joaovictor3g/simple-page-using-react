import React from 'react';

import './Form.css';

function disparaNoClick() {
  alert('It worked')

}

const Form = () => (
    
    <div className="App" >
      <div id="input-group">
        Nome:<input id="nome" type="text" placeholder="Digite seu nome"></input>
        RG:<input id="rg" type="text" placeholder="Digite seu rg"></input>
        CPF:<input id="cpf" type="text" placeholder="Digite seu cpf"></input>
        Idade:<input id="idade" type="number" placeholder="Digite sua idade"></input>
        <button id="salvar" type="submit" onClick={disparaNoClick}>Salvar</button>
      </div>
    </div>
);

export default Form;