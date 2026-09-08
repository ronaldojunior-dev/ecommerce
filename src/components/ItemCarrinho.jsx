import React from 'react';
import { formatarMoeda } from '../utils/pagamento';

export function ItemCarrinho({ produto }) {
  const subtotal = produto.precoUnitario * produto.quantidade;

  return (
    <div className="item-carrinho">
      <div>
        <h3>{produto.nome}</h3>
        <p>Preço unitário: {formatarMoeda(produto.precoUnitario)}</p>
        <p>Quantidade: {produto.quantidade}</p>
      </div>
      <div>
        <strong>Subtotal: {formatarMoeda(subtotal)}</strong>
      </div>
    </div>
  );
}