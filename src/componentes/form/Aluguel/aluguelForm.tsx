import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cadastraAluguel } from "../../../hooks/useAlugueis";
import {
  livroPorId,
  useLivrosDisponiveisPorNome,
} from "../../../hooks/useLivros";
import { useLocatariosPorNome } from "../../../hooks/useLocatarios";
import { IDadosLocatario } from "../../../interfaces/IDadosLocatario";
import obterDataHoraAtual from "../../../utils/operacoes-data.utils";
import Botao from "../../botao";
import CheckBoxList, { ICheckBoxItem } from "../../checkbox";
import style from "./aluguelForm.module.css";

type TypeAluguel = {
  id: string;
  dataRetirada: string;
  dataDevolucao: string;
  locatarioId: string;
  livro: string[];
};

const AluguelForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [aluguel, setAluguel] = useState<TypeAluguel>({
    id: "",
    dataRetirada: obterDataHoraAtual(),
    dataDevolucao: obterDataHoraAtual(),
    locatarioId: "",
    livro: [""],
  });

  const [livrosSelecionado, setLivrosSelecionado] = useState<ICheckBoxItem[]>(
    []
  );

  const listaLivros = useLivrosDisponiveisPorNome('');
  const items: ICheckBoxItem[] = listaLivros.map((livro) => ({
    // mapeado todos os livros disponiveis e adicionados na lista
    value: livro.id,
    label: livro.nome,
  }));

  const listaLocatario = useLocatariosPorNome({ nome: "" });

  useEffect(() => {
    async function carregarDados() {
      if (id) {
        const livro = await livroPorId(id);
        if (livro) {
          setLivrosSelecionado([
            {
              value: livro.id,
              label: livro.nome,
            },
          ]);
        }
      }
    }
    carregarDados();
  }, [id]);

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setAluguel((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLivrosChange = (items: ICheckBoxItem[]) => {
    const listaDeLivrosEscolhidos = items.map((item) => {
      setLivrosSelecionado(items);
      return item.value;
    });

    setAluguel({
      ...aluguel,
      livro: listaDeLivrosEscolhidos,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cadastraAluguel({ ...aluguel });
    navigate(`/`);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className={style.AppStyle}>
          <div className={style.container}>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Livro:</label>
              <CheckBoxList
                value={livrosSelecionado}
                items={items}
                onChange={(items: ICheckBoxItem[]) => handleLivrosChange(items)}
              ></CheckBoxList>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Data de Retirada:</label>
              <input
                type="datetime-local"
                name="dataRetirada"
                value={aluguel.dataRetirada}
                onChange={handleChange}
              ></input>
            </div>

            <div className={style.areaCampos}>
              <label className={style.labelForm}>Data de Devolução:</label>
              <input
                type="datetime-local"
                name="dataDevolucao"
                value={aluguel.dataDevolucao}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Locatário:</label>
              <select name="locatarioId" onChange={handleChange}>
                {listaLocatario.map((option: IDadosLocatario) => (
                  <option value={option.id}>{option.nome}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={style.areabotao}>
            <Botao type="submit">Reservar</Botao>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AluguelForm;
