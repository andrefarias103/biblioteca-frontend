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

  return( 
      <>      
        <Sidebar />
        <Routes>            
          <Route element = <Aluguel/> path="/" />  
          <Route element = <Autor/> path="/autor" />    
          <Route Component={AutorForm} path="/autor/cadastro" />  
          <Route Component={AutorForm} path="/autor/edicao/:id" />   
          <Route element = <Livro/> path="/livro" />  
          <Route Component={LivroForm} path="/livro/cadastro" />  
          <Route Component={LivroForm} path="/livro/edicao/:id" />           
          <Route element = <Locatario/> path="/locatario" />  
          <Route Component={LocatarioForm} path="/locatario/cadastro" />  
          <Route Component={LocatarioForm} path="/locatario/edicao/:id" />                
          <Route element = <LivroReservados/> path="/livro/reservados" />           
          <Route element = <LivroDisponiveis/> path="/livro/disponiveis" />    
          <Route element = <Aluguel/> path="/livro/aluguel" />  
          <Route Component={AluguelForm} path="/livro/aluguel/:id" />
        </Routes>
      </>
  )
}