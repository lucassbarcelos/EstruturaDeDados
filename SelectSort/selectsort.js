let lista = [15, 9, 2, 20, 5];
console.log(lista);
function retornaMenor(lista, posicao, posicaoAtual) {
  let length = lista.length - 1;
  console.log(
    "atual",
    lista[posicaoAtual],
    "compara",
    lista[posicao],
    "posicao",
    posicao
  );
  if (lista[posicaoAtual] > lista[posicao]) {
    if (posicao < length) {
      return retornaMenor(lista, posicao + 1, posicao);
    } else {
      console.log("retorna", lista[posicao]);
      return posicao;
    }
  } else if (posicao < length) {
    return retornaMenor(lista, posicao + 1, posicaoAtual);
  } else {
    console.log("retorna", lista[posicaoAtual]);
    return posicaoAtual;
  }
}

for (let i = 0; i < lista.length - 1; i++) {
  const x = lista[i];
  let menor = retornaMenor(lista, i + 1, i);
  lista[i] = lista[menor];
  lista[menor] = x;
}
console.log(lista);
