import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Carrinho } from './pages/Carrinho';
import { Pagamento } from './pages/Pagamento';
import { Sucesso } from './pages/Sucesso';
import { Falha } from './pages/Falha';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Carrinho />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/falha" element={<Falha />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
