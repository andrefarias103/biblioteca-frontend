import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import style from "./css/link-cadastrar.module.css";

interface LinkProps {
  to: string;
  children: ReactNode;
}

const LinkCadastrar: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className={style.link}>
      {children}
    </Link>
  );
};

export default LinkCadastrar;
