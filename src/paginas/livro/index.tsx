import React from "react";
import BarraDePesquisa from "../../componentes/barraPesquisa";
import GridLivro from "../../componentes/grid/livro/grid_livro";

const Livro: React.FC = () => {
    return (
       <BarraDePesquisa
            labelTitulo="Livro"
            linkPagina="/livro/cadastro"
            GridComponente= { GridLivro }
       >
       </BarraDePesquisa>
    );
}

export default Livro;