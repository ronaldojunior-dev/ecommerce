import React from 'react';
import { formatarMoeda } from '../utils/pagamento';

export function ResumoCompra({ total }) {
  return (
    <div className="resumo-compra">
      <h2>Resumo do Pedido</h2>
      <div className="total-linha">
        <span>Total a pagar:</span>
        <strong>{formatarMoeda(total)}</strong>
      </div>
    </div>
  );
}