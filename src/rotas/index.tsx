import React from "react";
import { Route, Routes } from "react-router-dom";
import AutorForm from "../componentes/form/Autor/autorForm";
import Sidebar from "../componentes/sideBar/Sidebar";
import Autor from "../paginas/autor";

export const AppRoutes: React.FC = () => {

  return( 
      <>      
        <Sidebar />
        <Routes>            
          <Route element = <Autor/> path="/autor" />    
          <Route Component={AutorForm} path="/autor/cadastro" />  
          <Route Component={AutorForm} path="/autor/edicao/:id" />    
          {/* <Route element = <Login></Login> path="/" />
          <Route element = <Login></Login> path="/login" />
          <Route element = <Logout></Logout> path="/logout" />
          <Route element = <PautaPorCategoria></PautaPorCategoria> path="/categorias/pautas/"  />
          <Route element = <Usuario></Usuario>  path="/usuarios/" />
          <Route element = {<RequisitosAutenticacao><UsuarioIncluir /></RequisitosAutenticacao>}  path="/usuarios/adicionar/" />
          <Route element = {<RequisitosAutenticacao><UsuarioEditor /></RequisitosAutenticacao>}  path="/usuarios/editar/:id" />  
          <Route element = <App></App>  path="/categorias/" /> 
          <Route element = {<RequisitosAutenticacao><CategoriaIncluir /></RequisitosAutenticacao>}  path="/categorias/adicionar/" />
          <Route element = {<RequisitosAutenticacao><CategoriaEditor /></RequisitosAutenticacao>}  path="/categorias/editar/:id" />
          <Route element = <Pauta></Pauta>  path="/pautas/" />
          <Route element = {<RequisitosAutenticacao><PautaIncluir /></RequisitosAutenticacao>}   path="/pautas/adicionar/" />
          <Route element = {<RequisitosAutenticacao><PautaEditor /></RequisitosAutenticacao>}   path="/pautas/editar/:id" />   
          <Route element = <Votacao></Votacao>  path="/votacoes/:id" />       
          <Route element = <ResultadoApuracao></ResultadoApuracao> path="/resultado/"  />  */}
        </Routes>
      </>
  )
}