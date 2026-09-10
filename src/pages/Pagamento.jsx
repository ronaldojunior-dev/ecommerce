import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { usePagamento } from '../hooks/usePagamento';
import { ResumoCompra } from '../components/ResumoCompra';
import { produtosIniciais } from '../data/produtos';
import { limparNumeroCartao } from '../utils/pagamento';

// Schema Zod atendendo estritamente ao RF06
const pagamentoSchema = z.object({
  titular: z.string().nonempty('O nome do titular é obrigatório.'),
  numeroCartao: z
    .string()
    .nonempty('O número do cartão é obrigatório.')
    .refine((val) => {
      const apenasNumeros = limparNumeroCartao(val);
      return apenasNumeros.length === 16;
    }, 'O cartão deve conter exatamente 16 dígitos.'),
  validade: z
    .string()
    .nonempty('A validade é obrigatória.')
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Formato inválido. Use MM/AA (mês entre 01 e 12).'),
  cvv: z
    .string()
    .nonempty('O CVV é obrigatório.')
    .regex(/^\d{3}$/, 'O CVV deve ter 3 dígitos numéricos.'),
});

export function Pagamento() {
  const { estaProcessando, processarPagamento } = usePagamento();

  const total = produtosIniciais.reduce(
    (acc, item) => acc + item.precoUnitario * item.quantidade,
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
  });

  const onSubmit = (data) => {
    processarPagamento(data);
  };

  return (
    <main className="container">
      <h1>Pagamento</h1>
      
      <ResumoCompra total={total} />

      <form onSubmit={handleSubmit(onSubmit)} className="form-pagamento" noValidate>
        <div className="campo">
          <label htmlFor="titular">Nome no Cartão</label>
          <input
            id="titular"
            type="text"
            {...register('titular')}
            disabled={estaProcessando}
          />
          {errors.titular && <span className="erro">{errors.titular.message}</span>}
        </div>

        <div className="campo">
          <label htmlFor="numeroCartao">Número do Cartão (16 dígitos)</label>
          <input
            id="numeroCartao"
            type="text"
            placeholder="0000 0000 0000 0000"
            {...register('numeroCartao')}
            disabled={estaProcessando}
          />
          {errors.numeroCartao && <span className="erro">{errors.numeroCartao.message}</span>}
        </div>

        <div className="grupo-duplo">
          <div className="campo">
            <label htmlFor="validade">Validade (MM/AA)</label>
            <input
              id="validade"
              type="text"
              placeholder="12/28"
              {...register('validade')}
              disabled={estaProcessando}
            />
            {errors.validade && <span className="erro">{errors.validade.message}</span>}
          </div>

          <div className="campo">
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="text"
              placeholder="123"
              {...register('cvv')}
              disabled={estaProcessando}
            />
            {errors.cvv && <span className="erro">{errors.cvv.message}</span>}
          </div>
        </div>

        <button type="submit" disabled={estaProcessando} className="btn-pagar">
          {estaProcessando ? 'Processando compra...' : 'Pagar Agora'}
        </button>
      </form>
    </main>
  );
}