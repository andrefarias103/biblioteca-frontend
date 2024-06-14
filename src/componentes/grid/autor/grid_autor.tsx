import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { excluirAutor, useAutoresPorNome } from "../../../hooks/useAutores";

interface GridProps {
  nome: string | undefined;
}

const GridAutor: React.FC<GridProps> = ({ nome }) => {
  const navigate = useNavigate();

  const listaAutores = useAutoresPorNome({ nome });

  const clickEditar = (id: number) => {
    navigate(`/autor/edicao/${id}`);
  };

  async function clickExcluir(id: number) {
    if (id) {
      excluirAutor({ id });
    }
  }

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "rgb(151 160 166)",
        minHeight: "28 px",
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        fontFamily: "sans-serif",
        color: "rgba(255, 255, 255, 1)",
      },
    },
    cells: {
      style: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: "100%",
      },
    },
  };

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
      // headCells: {
      //   style: {
      //     fontSize: "20px",
      //     fontWeight: "500",
      //     textTransform: "uppercase",
      //     paddingLeft: "0 8px",
      //   },
      // },
    },
    {
      name: "Sexo",
      selector: (row: { sexo: string }) => row.sexo,
      sortable: true,
      width: "8rem",
      // headCells: {
      //   style: {
      //     fontSize: "20px",
      //     fontWeight: "500",
      //     textTransform: "uppercase",
      //     paddingLeft: "0 8px",
      //   },
      // },
    },
    {
      name: "Ano de Nascimento",
      selector: (row: { anoDeNascimento: number }) => row.anoDeNascimento,
      sortable: true,
      width: "10rem",
      // headCells: {
      //   style: {
      //     fontSize: "20px",
      //     fontWeight: "500",
      //     textTransform: "uppercase",
      //     paddingLeft: "0 8px",
      //   },
      // },
    },
    {
      name: "CPF",
      selector: (row: { cpf: string }) => row.cpf,
      sortable: true,
      width: "20rem",
      // headCells: {
      //   style: {
      //     fontSize: "20px",
      //     fontWeight: "500",
      //     textTransform: "uppercase",
      //     paddingLeft: "0 8px",
      //   },
      // },
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
        data={listaAutores}
        pagination={true}
        paginationComponentOptions={paginationOptions}
        noDataComponent={"Nenhum registro encontrado"}
        paginationServer={true}
        fixedHeader={true}
        customStyles={customStyles}
      />
    </div>
  );
};

export default GridAutor;
