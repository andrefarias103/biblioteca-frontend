import React, { useState } from "react";
import GridAutor from "../../componentes/grid/autor/grid_autor";
import LinkCadastrar from "../../componentes/linkCadastrar/Index";
import style from "./css/autor-index.module.css";

const Autor: React.FC = () => {
    const [autorFiltro, setAutorFiltro] = useState('');
    
    const handleAutorChange = (event: { target: { value: any } }) => {            
        setAutorFiltro(event.target.value);
      };  

  return (
    <div className={style.AppStyle}>
      <div className={style.pesquisa}>
        <label>Autor:</label>
        <input type="text" className={style.textBox} onChange={handleAutorChange} value={autorFiltro}  ></input>
        <LinkCadastrar to="/autor/cadastro/">Cadastrar</LinkCadastrar>
      </div>
      <GridAutor nome={autorFiltro}></GridAutor>
    </div>
  );
};

export default Autor;
