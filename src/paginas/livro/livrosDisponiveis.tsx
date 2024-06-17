import React from "react";
import BarraDePesquisa from "../../componentes/barraPesquisa";
import GridLivroDisponiveis from "../../componentes/grid/livro/grid_livro_disponiveis";

const LivroDisponiveis: React.FC = () => {
    return (
       <BarraDePesquisa
            labelTitulo="Livro"
            linkPagina="/livro/disponiveis"
            GridComponente= { GridLivroDisponiveis }
       >
       </BarraDePesquisa>
    );
}

export default LivroDisponiveis;