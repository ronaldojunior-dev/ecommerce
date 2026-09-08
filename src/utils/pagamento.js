// Remove caracteres não numéricos (espaços e hífens)
export const limparNumeroCartao = (numero) => {
  return numero ? numero.replace(/\D/g, '') : '';
};

// Verifica se todos os 16 dígitos do cartão são iguais
export const eTentativaDeGolpe = (numeroCartao) => {
  const numeroLimpo = limparNumeroCartao(numeroCartao);
  
  if (numeroLimpo.length !== 16) {
    return false;
  }

  const primeiroDigito = numeroLimpo[0];
  return numeroLimpo.split('').every((digito) => digito === primeiroDigito);
};

// Formata valores numéricos para a moeda Real (R$)
export const formatarMoeda = (valor) => {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};