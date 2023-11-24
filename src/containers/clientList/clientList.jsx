import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import lixeira from "../../assets/imagens/icons/icons8-lixeira.svg";
import "./clientList.css";

const Linha = (props) => {
  async function deleteCliente(id) {
    try {
      let result = await fetch(`http://localhost:3333/deleteCliente?id=${id}`, {
        method: "DELETE",
      });
      if (!result.ok) throw new Error(result.status);

      props.onDeleteCliente(id);
    } catch (ex) {
      console.log("Erro durante a requisição:", ex.message);
    }
  }

  return (
    <tr>
      <td className="lixeira">
        <img
          src={lixeira}
          alt="excluir"
          onClick={() => deleteCliente(props.cliente.id)}
        />
      </td>
      <td className="nome">{props.cliente.nome}</td>
      <td>
        {props.cliente.telefone
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}
      </td>
      <td>
        {props.cliente.cep
          .replace(/\D/g, "")
          .replace(/^(\d{5})(\d{3})$/, "$1-$2")}
      </td>
      <td>
        {parseFloat(props.cliente.mensalidade).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </td>
    </tr>
  );
};

export const ClientList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/getCliente")
      .then((response) => response.json())
      .then((data) => setClientes(data));
  }, []);

  const handleDeleteCliente = (id) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };

  if(localStorage.getItem("user-info"))
  {
    return (
      <Navbar>
        <div className="area">
        <div className="table-title">CLIENTES</div>
          <div className="tabela">
            <table className="tabela" cellSpacing="0">
            <thead className="colunas">
                <tr>
                  <th className="lixeira"></th>
                  <th className="nome">Nome</th>
                  <th>Telefone</th>
                  <th>CEP</th>
                  <th>Mensalidade</th>
                </tr>
              </thead>
              <tbody className="linhas">
                {
                  clientes.map((cliente) => {
                    return (
                      <Linha
                        key={cliente.id}
                        cliente={cliente}
                        onDeleteCliente={handleDeleteCliente}
                      />
                    );
                  })
                }
              </tbody>
            </table>
          </div>
          <div className="botoes">
            <div className="btn novo" onClick={() => window.location.href="/addCliente"}>NOVO</div>
          </div>
        </div>
      </Navbar>
    );
  }
  else window.location.href = "/login";
};
