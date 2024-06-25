import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import config from "../config";
import { IDadosLivro } from "../interfaces/IDadosLivro";

const baseURL = config.appURL;

export const cadastraLivro = ({
  nome,
  isbn,
  dataDePublicacao,
  autorPorLivros,
}: {
  nome: string;
  isbn: string;
  dataDePublicacao: string;
  autorPorLivros: string[];
}) => {
  fetch(`${baseURL}/livro/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ nome, isbn, dataDePublicacao, autorPorLivros }),
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => toast.success("Livro criado com sucesso"))
    .catch((err) => toast.error(err.message));

  return { nome, isbn, dataDePublicacao, autorPorLivros };
};

export const atualizaLivro = ({
  id,
  nome,
  isbn,
  dataDePublicacao,
  autorPorLivros,
}: {
  id: string | undefined;
  nome: string | undefined;
  isbn: string | undefined;
  dataDePublicacao: string | undefined;
  autorPorLivros: string[];
}) => {
  fetch(`${baseURL}/livro/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ nome, isbn, dataDePublicacao, autorPorLivros }),
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Erro na atualização dos dados do livro");
      }
      return resp.json();
    })
    .then((data) => toast.success("Dados do livro atualizado com sucesso"))
    .catch((err) => toast.error("Erro na atualização dos dados do livro"));

  return { nome, isbn, dataDePublicacao, autorPorLivros };
};

export const excluirLivro = ({ id }: { id: string | undefined }) => {
  fetch(`${baseURL}/livro/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => toast.success("Dados do livro excluído com sucesso"))
    .catch((err) => toast.error(err.message));
};

export const useLivrosPorNome = (nome: string, tipo: string) => {
  const [listaLivros, setListaLivros] = useState<IDadosLivro[]>([]);

  useEffect(() => {
    let complemento_path: string = "/livro/";

    if (nome) {
      complemento_path = `${complemento_path}nome/${nome}`;
    } else if (tipo === "D") {
      complemento_path = `${complemento_path}disponiveis/"`;
      if (nome) {
        complemento_path = `${complemento_path}nome/${nome}`;
      }
    } else if (tipo === "R") {
      complemento_path = `${complemento_path}reservados/"`;
      if (nome) {
        complemento_path = `${complemento_path}nome/${nome}`;
      }
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}${complemento_path}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setListaLivros(data);
      } catch (err) {
        setListaLivros([]);
      }
    };
    fetchData();
  }, [nome, tipo]);
  return listaLivros;
};

export async function livroPorId(id: string) {
  const resposta = fetch(`${baseURL}/livro/${id}`)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  return resposta;
}
