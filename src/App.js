import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./containers/main/main";
import { Formulario } from "./containers/login/login";
import { ClientList } from "./containers/clientList/clientList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Formulario />} />
          <Route path="/clientes" element={<ClientList />} />
          <Route path="*" element={<div>PÁGINA NÃO ENCONTRADA</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
