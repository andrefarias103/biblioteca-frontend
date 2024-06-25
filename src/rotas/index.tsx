import React from "react";
import { Route, Routes } from "react-router-dom";
import AluguelForm from "../componentes/form/Aluguel/aluguelForm";
import AutorForm from "../componentes/form/Autor/autorForm";
import LivroForm from "../componentes/form/Livro/livroForm";
import LocatarioForm from "../componentes/form/Locatario/locatarioForm";
import Sidebar from "../componentes/sideBar/Sidebar";
import Aluguel from "../paginas/aluguel";
import Autor from "../paginas/autor";
import Livro from "../paginas/livro";
import LivroDisponiveis from "../paginas/livro/livrosDisponiveis";
import LivroReservados from "../paginas/livro/livrosReservados";
import Locatario from "../paginas/locatario";

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element=<Aluguel /> />

        <Route path="/autor" element={<Autor />}>
          <Route path="cadastro" element={<AutorForm />} />
          <Route path="edicao/:id" element={<AutorForm />} />
        </Route>
        <Route path="/livro" element=<Livro />> 
          <Route path="/livro/cadastro" Component={LivroForm}  />
          <Route path="/livro/edicao/:id" Component={LivroForm} />        
          <Route path="/livro/reservados" element=<LivroReservados /> />
          <Route path="/livro/disponiveis" element=<LivroDisponiveis /> />          
          <Route path="/livro/aluguel" element=<Aluguel /> />
          <Route path="/livro/aluguel/:id" Component={AluguelForm} />          
        </Route>
        <Route path="/locatario" element=<Locatario /> >
          <Route path="/locatario/cadastro" Component={LocatarioForm}  />
          <Route path="/locatario/edicao/:id" Component={LocatarioForm}  />
        </Route>
      </Routes>
    </>
  );
};
