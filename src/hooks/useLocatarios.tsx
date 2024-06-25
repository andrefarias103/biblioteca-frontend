import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import config from "../config";
import { IDadosLocatario } from "../interfaces/TLocatarios";

const baseURL = config.appURL;

export const useLocatarios = () => {
  const [listaLocatarios, setLocatarios] = useState<IDadosLocatario[]>([]);

  useEffect(() => {
    fetch(`${baseURL}/locatario/nome`)
      .then((response) => response.json())
      .then((data) => setLocatarios(data));
  }, []);

  return listaLocatarios;
};

export const cadastraLocatario = ({
  nome,
  sexo,
  telefone,
  email,
  dataDeNascimento,
  cpf,
}: {
  nome: string | undefined;
  sexo: string | undefined;
  telefone: string | undefined;
  email: string | undefined;
  dataDeNascimento: string | undefined;
  cpf: string | undefined;
}) => {
  console.log({
    nome,
    sexo,
    telefone,
    email,
    dataDeNascimento,
    cpf,
  });

  console.log(`${baseURL}/locatario/`);

  fetch(`${baseURL}/locatario/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nome,
      sexo,
      telefone,
      email,
      dataDeNascimento,
      cpf,
    }),
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => toast.success("Locatário criado com sucesso"))
    .catch((err) => toast.error(err.message));

  return { nome, sexo, telefone, email, dataDeNascimento, cpf };
};

export const atualizaLocatario = ({
  id,
  nome,
  sexo,
  telefone,
  email,
  dataDeNascimento,
  cpf,
}: {
  id: string;
  nome: string;
  sexo: string;
  telefone: string;
  email: string;
  dataDeNascimento: string;
  cpf: string;
}) => {
  fetch(`${baseURL}/locatario/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      nome,
      sexo,
      telefone,
      email,
      dataDeNascimento,
      cpf,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  toast.success("Dados do locatario atualizado com sucesso");

  return { nome, sexo, telefone, email, dataDeNascimento, cpf };
};

export const excluirLocatario = ({ id }: { id: number | undefined }) => {
  fetch(`${baseURL}/locatario/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => toast.success("Dados do locatario excluído com sucesso"))
    .catch((err) => toast.error(err.message));
};

export const useLocatariosPorNome = ({
  nome,
}: {
  nome: string | undefined;
}) => {
  const [listaLocatarios, setLocatarios] = useState<IDadosLocatario[]>([]);
  useEffect(() => {
    let complemento_path: string = "nome/";
    if (nome) {
      complemento_path = `${complemento_path}${nome}`;
    }
    fetch(`${baseURL}/locatario/${complemento_path}`)
      .then((resp) => resp.json())
      .then((data) => setLocatarios(data));
  }, [nome]);
  return listaLocatarios;
};

export async function locatarioPorid(id: string) {
  const resposta = fetch(`${baseURL}/locatario/${id}`)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  return resposta;
}
