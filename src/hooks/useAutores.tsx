import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import config from "../config";
import { IDadosAutor } from "../interfaces/TAutores";

const baseURL = config.appURL;

export const useAutores = () => {
  const [listaAutores, setAutores] = useState<IDadosAutor[]>([]);

  useEffect(() => {
    fetch(`${baseURL}/autor/nome`)
      .then((response) => response.json())
      .then((data) => setAutores(data));
  }, []);

  return listaAutores;
};

export const cadastraAutor = ({
  nome,
  descricao,
}: {
  nome: string | undefined;
  descricao: string | undefined;
}) => {
  if (!nome || !descricao) {
    return;
  }

  fetch(`${baseURL}/autor/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ nome, descricao }),
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => toast.success("Autor criado com sucesso"))
    .catch((err) => toast.error(err.message));

  return { nome, descricao };
};

export const atualizaAutor = ({
  id,
  nome,
  cpf,
  anoDeNascimento, 
  sexo
}: {
  id: string | undefined;
  nome: string | undefined;
  cpf: string | undefined;
  anoDeNascimento: string | undefined;
  sexo: string | undefined;
}) => {

  fetch(`${baseURL}/autor/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ nome, cpf, anoDeNascimento, sexo }),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  toast.success("Dados do autor atualizado com sucesso");

  return { nome, cpf, anoDeNascimento, sexo };
};

export const excluirAutor = ({ id }: { id: number | undefined }) => {
  fetch(`${baseURL}/autor/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => toast.success("Dados do autor excluído com sucesso"))
    .catch((err) => toast.error(err.message));
};

export const useAutoresPorNome = ({ nome } : { nome: string | undefined}) => {
   const [listaAutores, setAutores] = useState<IDadosAutor[]>([]);
   useEffect(() => {
        let complemento_path: string = '/';
        if (nome) {
          complemento_path = `/nome/${nome}`;
        }
       fetch(`${baseURL}/autor${complemento_path}`)
          .then((resp) => resp.json())
          .then((data) => setAutores(data));               
   }, [nome]);
   return listaAutores;    
};

export async function autorPorid(id: string) {
    const resposta = fetch(`${baseURL}/autor/${id}`)
    .then((resp) => resp.json())
    .catch(err => console.log(err));
  return resposta;
}


