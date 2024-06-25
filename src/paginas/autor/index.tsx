import React from "react";
import BarraDePesquisa from "../../componentes/barraPesquisa";
import GridAutor from "../../componentes/grid/autor/grid_autor";

const Autor: React.FC = () => {
  return (
    <BarraDePesquisa
      labelTitulo="Autor"
      linkPagina="/autor/cadastro"
      GridComponente={GridAutor}
    ></BarraDePesquisa>
  );
};

export default Autor;
