import { FC, ReactNode, useState } from "react";
import LinkCadastrar from "../linkCadastrar/Index";
import style from "./css/barraPesquisa.module.css";

interface GridProps {
  nome: string;
}

interface BarraDePesquisaProps {
  labelTitulo: string;
  linkPagina: string;
  GridComponente: React.ComponentType<GridProps>;
  children?: ReactNode;
}

const BarraDePesquisa: FC<BarraDePesquisaProps> = ({
  labelTitulo,
  linkPagina,
  GridComponente,
  children,
}) => {
  const [entidadeFiltro, setEntidadeFiltro] = useState("");

  const handleEntidadeChange = (event: { target: { value: any } }) => {
    setEntidadeFiltro(event.target.value);
  };

  return (
    <div className={style.AppStyle}>
      <div className={style.pesquisa}>
        <label>{labelTitulo}:</label>
        <input
          type="text"
          className={style.textBox}
          onChange={handleEntidadeChange}
          value={entidadeFiltro}
        ></input>
        <LinkCadastrar to={linkPagina}>Cadastrar</LinkCadastrar>
      </div>
      <GridComponente nome={entidadeFiltro}></GridComponente>
      {children}
    </div>
  );
};

export default BarraDePesquisa;
