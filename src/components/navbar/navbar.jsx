import React from "react";
import "./navbar.css";
import logo from "../../assets/imagens/header/logoheader.png";

const BotaoLogin = () => {
  return (
    <div className="botao-div">
      <div
        className="botao"
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        login
      </div>
      <div className="botao-underline"></div>
    </div>
  );
};

const BotaoSair = () => {
  return (
    <div className="botao-div">
      <div
        className="botao"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        sair
      </div>
      <div className="botao-underline"></div>
    </div>
  );
};

const BotaoVoltar = () => {
  return (
    <div className="botao-div">
      <div
        className="botao"
        onClick={() => {
          window.location.href = "/clientes";
        }}
      >
        voltar
      </div>
      <div className="botao-underline"></div>
    </div>
  );
};

export const Navbar = (props) => {
  return (
    <div className="container-geral">
      <div className="topbar">
        <img
          alt="TRANSLAURA"
          src={logo}
          className="logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        {window.location.pathname === "/" ? <BotaoLogin /> : ""}
        {window.location.pathname === "/clientes" ? <BotaoSair /> : ""}
        {window.location.pathname === "/clientes/add" ? <BotaoVoltar /> : ""}
      </div>

      <div className="container-resto">{props.children}</div>
    </div>
  );
};
