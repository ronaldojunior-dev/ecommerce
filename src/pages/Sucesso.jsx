import React from 'react';
import { Link } from 'react-router-dom';

export function Sucesso() {
  return (
    <main className="container resultado-box sucesso">
      <h1>Compra Realizada com Sucesso!</h1>
      <p>Obrigado por comprar conosco. Seu pedido foi aprovado.</p>
      
      <Link to="/" className="btn-acao">
        Voltar ao Carrinho
      </Link>
    </main>
  );
}