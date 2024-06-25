import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import {
  excluirLocatario,
  useLocatariosPorNome,
} from "../../../hooks/useLocatarios";

interface GridProps {
  nome: string;
}

const GridLocatario: React.FC<GridProps> = ({ nome }) => {
  const navigate = useNavigate();

  const listaLocatarios = useLocatariosPorNome({ nome });

  const clickEditar = (id: number) => {
    navigate(`/locatario/edicao/${id}`);
  };

  async function clickExcluir(id: number) {
    if (id) {
      excluirLocatario({ id });
    }
  }


  const colunas = [
    {
      name: "Id",
      selector: (row: { id: string }) => row.id,
      sortable: true,
      width: "4rem",
      omit: true,
    },
    {
      name: "Nome",
      selector: (row: { nome: string }) => row.nome,
      sortable: true,
      width: "25rem",
    },
    {
      name: "Sexo",
      selector: (row: { sexo: string }) => row.sexo,
      sortable: true,
      width: "8rem",
    },
    {
      name: "CPF",
      selector: (row: { cpf: string }) => row.cpf,
      sortable: true,
      width: "20rem",
    },
    {
      name: "Telefone",
      selector: (row: { telefone: string }) => row.telefone,
      sortable: true,
      width: "8rem",
    },
    {
      name: "Email",
      selector: (row: { email: string }) => row.email,
      sortable: true,
      width: "8rem",
    },
    {
      name: "Data de Nascimento",
      selector: (row: { dataDeNascimento: string }) => row.dataDeNascimento,
      sortable: true,
      width: "10rem",
    },
    {
      cell: (row: { id: any }) => (
        <>
          <button onClick={() => clickEditar(row.id)} className="btn-editar">
            Editar
          </button>
          <button
            onClick={() => clickExcluir(row.id)}
            className="btn-excluir m-left"
          >
            Excluir
          </button>
        </>
      ),
      backgroundColor: "rgba(237, 245, 248, 1)",
      heigth: "10px",
      right: true,
    },
  ];

  const paginationOptions = {
    rowsPerPageText: "Registros por página: ",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <div>
      <DataTable
        columns={colunas}
        data={listaLocatarios}
        pagination={true}
        paginationComponentOptions={paginationOptions}
        noDataComponent={"Nenhum registro encontrado"}
        paginationServer={true}
        fixedHeader={true}
      />
    </div>
  );
};

export default GridLocatario;
