import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Navbar } from "../../components/navbar/navbar";
import userImg from "../../assets/imagens/icons/user-solid.svg";
import padlock from "../../assets/imagens/icons/lock-svgrepo-com.svg";

export const Formulario = () => {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/clientes");
    }
  });

  async function log() {
    const item = { login, senha };

    try {
      let result = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!result.ok) {
        throw new Error(result.status);
      }

      result = await result.text();
      localStorage.setItem("user-info", JSON.stringify(result));

      navigate("/clientes");
    } catch (error) {
      console.log("Erro durante a requisição:", error.message);
    }
  }

  return (
    <Navbar>
      <div className="formulario">
        <div className="login-title">LOGIN</div>
        <div className="login-underline"></div>
        <form>
          <div className="input">
            <img src={userImg} alt="" />
            <input
              type="text"
              placeholder="usuario"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={padlock} alt="" />
            <input
              type="password"
              placeholder="senha"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="entrar" onClick={log}>
            ENTRAR
          </div>
        </form>
      </div>
    </Navbar>
  );
};
