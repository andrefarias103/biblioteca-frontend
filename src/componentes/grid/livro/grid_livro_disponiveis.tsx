import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useLivrosDisponiveisPorNome } from "../../../hooks/useLivros";

interface GridProps {
  nome: string;
}

const GridLivroDisponiveis: React.FC<GridProps> = ({nome}) => {
  const navigate = useNavigate();

  const listaLivros = useLivrosDisponiveisPorNome(nome);

  const clickEditar = (id: string) => {
    navigate(`/livro/aluguel/${id}`);
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
    },
    {
      name: "Isbn",
      selector: (row: { isbn: string }) => row.isbn,
      sortable: true,
      width: "20rem",
    },
    {
      name: "Data de Publicação",
      selector: (row: { dataDePublicacao: string }) => row.dataDePublicacao,
      sortable: true,
      width: "15rem",
    },
    {
      cell: (row: { id: any }) => (
        <>
          <button onClick={() => clickEditar(row.id)} className="btn-editar">
            Reservar
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
        data={listaLivros}
        pagination={true}
        paginationComponentOptions={paginationOptions}
        noDataComponent={"Nenhum registro encontrado"}
        paginationServer={true}
        fixedHeader={true}
      />
    </div>
  );
};

export default GridLivroDisponiveis;
