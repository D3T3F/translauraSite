import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import "./clientList.css";

const Linha = (props) => {
  console.log(props);
  return (
    <tr>
      <td className="nome">{props.cliente.nome}</td>
      <td>{props.cliente.telefone}</td>
      <td>{props.cliente.cep}</td>
      <td>R$ {props.cliente.mensalidade}</td>
    </tr>
  );
};

export const ClientList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/getCliente")
      .then((response) => response.json())
      .then((users) => setClientes(users));
  }, []);

  return (
    <Navbar>
      <div className="area">
        <div className="table-title">CLIENTES</div>
        <table className="tabela">
          <thead className="colunas">
            <tr>
              <th className="nome">Nome</th>
              <th>Telefone</th>
              <th>CEP</th>
              <th>Mensalidade</th>
            </tr>
          </thead>
          <tbody className="linhas">
            {clientes[0] &&
              clientes[0].map((cliente) => {
                return <Linha key={cliente.id} cliente={cliente} />;
              })}
          </tbody>
        </table>
      </div>
    </Navbar>
  );
};
