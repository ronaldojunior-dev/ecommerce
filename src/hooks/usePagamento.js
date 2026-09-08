import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eTentativaDeGolpe } from '../utils/pagamento';

export function usePagamento() {
  const [estaProcessando, setEstaProcessando] = useState(false);
  const navigate = useNavigate();

  const processarPagamento = (dadosFormulario) => {
    setEstaProcessando(true);

    // Simula operacao assincrona no navegador
    setTimeout(() => {
      setEstaProcessando(false);

      if (eTentativaDeGolpe(dadosFormulario.numeroCartao)) {
        navigate('/falha');
      } else {
        navigate('/sucesso');
      }
    }, 2000);
  };

  return {
    estaProcessando,
    processarPagamento,
  };
}