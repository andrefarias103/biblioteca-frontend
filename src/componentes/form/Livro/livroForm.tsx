import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAutoresPorNome } from "../../../hooks/useAutores";
import {
    atualizaLivro,
    cadastraLivro,
    livroPorId,
} from "../../../hooks/useLivros";
import Botao from "../../botao";
import CheckBoxList, { ICheckBoxItem } from "../../checkbox";
import LinkCadastrar from "../../linkCadastrar/Index";
import style from "./livroForm.module.css";

type TypeLivro = {
  nome: string;
  isbn: string;
  dataDePublicacao: string;
  autorPorLivros: string[];
};

type TypeAutorPorLivro = {
  autor: {
    id: string;
    nome: string;
  };
};

const LivroForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const autores = useAutoresPorNome({ nome: "" });

  const [livro, setLivro] = useState<TypeLivro>({
    nome: "",
    isbn: "",
    dataDePublicacao: "",
    autorPorLivros: [""],
  });

  const items: ICheckBoxItem[] = autores.map((autor) => ({
    value: autor.id,
    label: autor.nome,
  }));

  const [autoresSelecionados, setAutoresSelecionados] = useState<
    ICheckBoxItem[]
  >([]);

  useEffect(() => {
    async function carregarDados() {
      if (id) {
        const livro = await livroPorId(id);
        if (livro) {
          // eslint-disable-next-line array-callback-return
          livro.autorPorLivros.map((item: TypeAutorPorLivro) => {
            setAutoresSelecionados([
              {
                value: item.autor.id,
                label: item.autor.nome,
              },
            ]);
          });

          setLivro({
            nome: livro.nome,
            isbn: livro.isbn,
            dataDePublicacao: livro.dataDePublicacao,
            autorPorLivros: livro.autorPorLivros,
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
    setLivro({ ...livro, [name]: value });
  };

  const handleAutoresChange = (items: ICheckBoxItem[]) => {
    const listaAutores = items.map((item) => {
      setAutoresSelecionados(items);
      return item.value;
    });
    setLivro({
      ...livro,
      autorPorLivros: listaAutores,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id) {
      atualizaLivro({ id, ...livro });
    } else {
      cadastraLivro({ ...livro });
    }
    navigate(`/livro/`);
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
                value={livro.nome}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>ISBN:</label>
              <input
                type="text"
                name="isbn"
                value={livro.isbn}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Data de Publicação:</label>
              <input
                type="text"
                min="0"
                max="100"
                name="dataDePublicacao"
                value={livro.dataDePublicacao}
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.areaCampos}>
              <label className={style.labelForm}>Autores:</label>
              <CheckBoxList
                value={autoresSelecionados}
                items={items}
                onChange={(items: ICheckBoxItem[]) =>
                  handleAutoresChange(items)
                }
              ></CheckBoxList>
            </div>
          </div>
          <div className={style.areabotao}>
            <Botao type="submit">Salvar</Botao>
            <LinkCadastrar to="/livro/">Voltar</LinkCadastrar>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LivroForm;
