import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizaAutor, autorPorid } from "../../../hooks/useAutores";
import Botao from "../../botao";
import LinkCadastrar from "../../linkCadastrar/Index";
import style from "./autorForm.module.css";

const AutorForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [autor, setAutor] = useState({
    nome: "",
    cpf: "",
    anoDeNascimento: "",
    sexo: "",
  });

  useEffect(() => {
    async function carregarDados() {
      if (id) {
        const autor = await autorPorid(id);
        if (autor) {
          setAutor({
            nome: autor.nome,
            cpf: autor.cpf,
            anoDeNascimento: autor.anoDeNascimento,
            sexo: autor.sexo,
          });
        }
      }
    }
    carregarDados();
  }, [id]);

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setAutor({ ...autor, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    atualizaAutor({ id, ...autor });
    navigate(`/autor/`);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className={style.AppStyle}>
          <div className={style.container}>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Nome:</label>
              <input
                type="text"
                name="nome"
                value={autor.nome}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>CPF:</label>
              <input
                type="text"
                name="cpf"
                value={autor.cpf}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Ano de Nascimento:</label>
              <input
                type="number"
                min="0"
                max="100"
                name="anoDeNascimento"
                value={autor.anoDeNascimento}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Sexo:</label>
              <select name="sexo" value={autor.sexo} onChange={handleChange}>
                <option value={"0"}> Feminino </option>
                <option value={"1"}> Masculino </option>
              </select>
            </div>
          </div>
          <div className={style.areabotao}>
            <Botao type="submit">Salvar</Botao>
            <LinkCadastrar to="/autor/">Voltar</LinkCadastrar>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AutorForm;
