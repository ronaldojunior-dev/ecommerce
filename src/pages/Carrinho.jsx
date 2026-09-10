import React from 'react';
import { Link } from 'react-router-dom';
import { produtosIniciais } from '../data/produtos';
import { ItemCarrinho } from '../components/ItemCarrinho';
import { ResumoCompra } from '../components/ResumoCompra';

export function Carrinho() {
  const total = produtosIniciais.reduce(
    (acc, item) => acc + item.precoUnitario * item.quantidade,
    0
  );

  return (
    <main className="container">
      <h1>Carrinho de Compras</h1>

      <div className="lista-produtos">
        {produtosIniciais.map((produto) => (
          <ItemCarrinho key={produto.id} produto={produto} />
        ))}
      </div>

      <ResumoCompra total={total} />

      <Link to="/pagamento" className="btn-acao">
        Finalizar Compra
      </Link>
    </main>
  );
}