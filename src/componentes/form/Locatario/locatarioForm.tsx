import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    atualizaLocatario,
    cadastraLocatario,
    locatarioPorid,
} from "../../../hooks/useLocatarios";
import Botao from "../../botao";
import LinkCadastrar from "../../linkCadastrar/Index";
import style from "./locatarioForm.module.css";

const LocatarioForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [locatario, setLocatario] = useState({
    nome: "",
    sexo: "",
    telefone: "",
    email: "",
    dataDeNascimento: "",
    cpf: "",
  });

  useEffect(() => {
    async function carregarDados() {
      if (id) {
        const dadosLocatario = await locatarioPorid(id);
        if (dadosLocatario) {
          setLocatario({
            nome: dadosLocatario.nome,
            sexo: dadosLocatario.sexo,
            telefone: dadosLocatario.telefone,
            email: dadosLocatario.email,
            dataDeNascimento: dadosLocatario.dataDeNascimento,
            cpf: dadosLocatario.cpf,
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
    setLocatario({ ...locatario, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id) {
      atualizaLocatario({ id, ...locatario });
    } else {
      cadastraLocatario({ ...locatario });
    }
    navigate(`/locatario/`);
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
                value={locatario.nome}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Sexo:</label>
              <select
                name="sexo"
                value={locatario.sexo}
                onChange={handleChange}
              >
                <option value={""}> </option>
                <option value={"Feminino"}> Feminino </option>
                <option value={"Masculino"}> Masculino </option>
              </select>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>CPF:</label>
              <input
                type="text"
                name="cpf"
                value={locatario.cpf}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Telefone:</label>
              <input
                type="text"
                name="telefone"
                value={locatario.telefone}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>E-mail:</label>
              <input
                type="text"
                name="email"
                value={locatario.email}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Data de Nascimento:</label>
              <input
                type="text"
                name="dataDeNascimento"
                value={locatario.dataDeNascimento}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className={style.areabotao}>
            <Botao type="submit">Salvar</Botao>
            <LinkCadastrar to="/locatario/">Voltar</LinkCadastrar>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LocatarioForm;
