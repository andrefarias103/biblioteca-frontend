import React from "react";
import BarraDePesquisa from "../../componentes/barraPesquisa";
import GridLivroReservados from "../../componentes/grid/livro/grid_livro_reservados";

const LivroReservados: React.FC = () => {
    return (
       <BarraDePesquisa
            labelTitulo="Livro"
            linkPagina="/livro/disponiveis"
            GridComponente= { GridLivroReservados }
       >
       </BarraDePesquisa>
    );
}

export default LivroReservados;