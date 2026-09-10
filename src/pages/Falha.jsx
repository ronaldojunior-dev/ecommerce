import React from 'react';
import { Link } from 'react-router-dom';

export function Falha() {
  return (
    <main className="container resultado-box falha">
      <h1>tentativa de golpe</h1>
      <p>A transação foi recusada pela nossa verificação de segurança.</p>
      
      <Link to="/pagamento" className="btn-acao">
        Tentar Novamente
      </Link>
    </main>
  );
}