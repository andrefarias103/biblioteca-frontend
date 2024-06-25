import { toast } from "react-toastify";
import config from "../config";

const baseURL = config.appURL;

export const cadastraAluguel = ({
  dataRetirada,
  dataDevolucao,
  locatarioId,
  livro,
}: {
  dataRetirada: string;
  dataDevolucao: string;
  locatarioId: string;
  livro: string[];
}) => {
  fetch(`${baseURL}/aluguel/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ dataRetirada, dataDevolucao, locatarioId, livro }),
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => toast.success("Aluguel realizado com sucesso"))
    .catch((err) => toast.error(err.message));

  return { dataRetirada, dataDevolucao, locatarioId, livro };
};
