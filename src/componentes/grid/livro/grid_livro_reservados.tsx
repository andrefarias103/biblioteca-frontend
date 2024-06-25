import DataTable from "react-data-table-component";
import { useLivrosReservadosPorNome } from "../../../hooks/useLivros";

interface GridProps {
  nome: string;
}

const GridLivroReservados: React.FC<GridProps> = ({ nome }) => {
  const listaLivros = useLivrosReservadosPorNome({ nome });

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

export default GridLivroReservados;
