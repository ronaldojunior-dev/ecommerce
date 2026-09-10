import React from 'react';
import { formatarMoeda } from '../utils/pagamento';

export function ItemCarrinho({ produto }) {
  const subtotal = produto.precoUnitario * produto.quantidade;

  return (
    <div className="item-carrinho">
      <div className="item-detalhes">
        <h3>{produto.nome}</h3>
        <div className="item-meta">
          <span>{formatarMoeda(produto.precoUnitario)}</span>
          <span>•</span>
          <span className="qtd-badge">{produto.quantidade}x</span>
        </div>
      </div>
      <div className="item-preco">
        <span className="subtotal-rotulo">Subtotal</span>
        <strong className="subtotal-valor">{formatarMoeda(subtotal)}</strong>
      </div>
    </div>
  );
}