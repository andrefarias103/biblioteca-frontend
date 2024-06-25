import React from "react";
import BarraDePesquisa from "../../componentes/barraPesquisa";
import GridLivro from "../../componentes/grid/livro/grid_livro";

const LivroReservados: React.FC = () => {
  return (
    <BarraDePesquisa
      labelTitulo="Livro"
      linkPagina="/livro/disponiveis"
      GridComponente={(props) => <GridLivro {...props} tipo={'R'} />}
    ></BarraDePesquisa>
  );
};

export default LivroReservados;
