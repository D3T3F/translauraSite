import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./containers/main/main";
import { Formulario } from "./containers/login/login";
import { ClientList } from "./containers/clientList/clientList";
import { AddCliente } from "./containers/addCliente/addCliente";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Formulario />} />
          <Route path="/clientes" element={<ClientList />} />
          <Route path="/clientes/add" element={<AddCliente />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  width: "100%",
                  paddingTop: "40px",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                PÁGINA NÃO ENCONTRADA
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
