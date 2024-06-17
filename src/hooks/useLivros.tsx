import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import config from "../config";
import { IDadosLivro } from "../interfaces/TLivros";

const baseURL = config.appURL;

export const useLivros = () => {
  const [listaLivros, setLivros] = useState<IDadosLivro[]>([]);

  useEffect(() => {
    fetch(`${baseURL}/livro/nome`)
      .then((response) => response.json())
      .then((data) => setLivros(data));
  }, []);

  return listaLivros;
};

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
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  toast.success("Dados do livro atualizado com sucesso");

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

export const useLivrosPorNome = ({ nome }: { nome: string }) => {
  const [listaLivros, setListaLivros] = useState<IDadosLivro[]>([]);

  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    let complemento_path: string = "/";
    if (nome) {
      complemento_path = `/nome/${nome}`;
    }

    const fetchData = async () => {
      setError(null);

      try {
        const response = await fetch(`${baseURL}/livro${complemento_path}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setListaLivros(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(" Erro: " + err.message);
        } else {
          setError("Erro desconhecido!");
        }
        setListaLivros([]);
      }
    };
    fetchData();
  }, [nome]);
  return listaLivros;
};

export const useLivrosReservadosPorNome = ({ nome }: { nome: string }) => {
  const [listaLivros, setListaLivros] = useState<IDadosLivro[]>([]);

  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    let complemento_path: string = "reservados/";
    if (nome) {
      complemento_path = `${complemento_path}${nome}`;
    }

    const fetchData = async () => {
      setError(null);

      try {
        const response = await fetch(`${baseURL}/livro/${complemento_path}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setListaLivros(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(" Erro: " + err.message);
        } else {
          setError("Erro desconhecido!");
        }
        setListaLivros([]);
      }
    };
    fetchData();
  }, [nome]);
  return listaLivros;
};

export const useLivrosDisponiveisPorNome = ({ nome }: { nome: string }) => {
  const [listaLivros, setListaLivros] = useState<IDadosLivro[]>([]);

  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    let complemento_path: string = "disponiveis/";
    if (nome) {
      complemento_path = `${complemento_path}${nome}`;
    }

    const fetchData = async () => {
      setError(null);

      try {
        const response = await fetch(`${baseURL}/livro/${complemento_path}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setListaLivros(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(" Erro: " + err.message);
        } else {
          setError("Erro desconhecido!");
        }
        setListaLivros([]);
      }
    };
    fetchData();
  }, [nome]);
  return listaLivros;
};

export async function livroPorId(id: string) {
  const resposta = fetch(`${baseURL}/livro/${id}`)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  return resposta;
}
