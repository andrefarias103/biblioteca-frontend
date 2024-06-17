import React from "react";
import BarraDePesquisa from "../../componentes/barraPesquisa";
import GridLocatario from "../../componentes/grid/locatario/grid_locatario";

const Locatario: React.FC = () => {
  return (
    <BarraDePesquisa
         labelTitulo="Locatário"
         linkPagina="/locatario/cadastro"
         GridComponente= { GridLocatario }
    >
    </BarraDePesquisa>
 );
};

export default Locatario;
