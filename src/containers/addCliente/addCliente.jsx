import React, { useState } from "react";
import "./addCliente.css";
import { Navbar } from "../../components/navbar/navbar";
import userImg from "../../assets/imagens/icons/user-solid.svg";
import foneImg from "../../assets/imagens/icons/cell.png";
import cepImg from "../../assets/imagens/icons/cep.png";
import valueImg from "../../assets/imagens/icons/valor.png";

export const AddCliente = () => {
  const [cliente, setCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [valor, setValor] = useState(0.0);

  const [mensagem, setMensagem] = useState(" ");

  async function add() {
    const item = { cliente, telefone, cep, valor };

    if (cliente !== "" && telefone !== "" && cep !== "" && valor !== 0.0)
      try {
        let result = await fetch("http://localhost:3333/postCliente", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        });

        if (!result.ok) throw new Error(result.status);

        setMensagem("Cliente adicionado com sucesso!");
        document.getElementById("add").reset();
      } catch (error) {
        console.log("Erro durante a requisição:", error.message);
        setMensagem("Falha ao inserir cliente!");
      }
    else setMensagem("Preencha todos os campos!");
  }

  if (localStorage.getItem("user-info"))
    return (
      <Navbar>
        <div className="formadd">
          <div className="login-title">ADICIONAR CLIENTE</div>
          <div className="login-underline"></div>
          <form id="add">
            <div className="input nome">
              <img src={userImg} alt="" />
              <input
                type="text"
                placeholder="nome"
                onChange={(e) => {
                  setMensagem(" ");
                  setCliente(e.target.value);
                }}
              />
            </div>
            <div className="infos">
              <div className="input">
                <img src={foneImg} alt="" />
                <input
                  type="tel"
                  placeholder="telefone"
                  maxLength="11"
                  onChange={(e) => {
                    setMensagem(" ");

                    e.target.value = e.target.value.replace(/\D/g, "");
                    e.target.value = e.target.value.replace(
                      /(\d{2})(\d{5})(\d{4})/,
                      "($1) $2-$3"
                    );

                    setTelefone(e.target.value);
                  }}
                />
              </div>
              <div className="input cep">
                <img src={cepImg} alt="" />
                <input
                  type="text"
                  placeholder="cep"
                  maxLength="8"
                  onChange={(e) => {
                    setMensagem(" ");

                    e.target.value = e.target.value.replace(/\D/g, "");
                    e.target.value = e.target.value.replace(
                      /(\d{5})(\d{3})/,
                      "$1-$2"
                    );

                    setCep(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="input">
              <img src={valueImg} alt="" />
              <input
                type="text"
                placeholder="valor"
                onChange={(e) => {
                  setMensagem(" ");
                  e.target.value = e.target.value.replace(/[^\d.,]/g, "");
                  if (
                    e.target.value !== undefined &&
                    e.target.value.split(/[.,]/)[1] !== undefined &&
                    (e.target.value.split(/[.,]/).length > 2 ||
                      e.target.value.split(/[.,]/)[1].length > 2)
                  )
                    e.target.value = e.target.value.slice(0, -1);

                  setValor(parseFloat(e.target.value));
                }}
              />
            </div>
          </form>
          <div className="btns">
            {<p className="aviso">{mensagem}</p>}
            <div className="btns-form">
              <div className="entrar add" onClick={add}>
                ADICIONAR
              </div>
              <div
                className="entrar"
                onClick={() => {
                  document.getElementById("add").reset();
                  setMensagem(" ");
                }}
              >
                LIMPAR
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    );
  else window.location.href = "/login";
};
