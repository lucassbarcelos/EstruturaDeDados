let lista = [15, 9, 2, 20, 5];

function formaRecursiva(lista) {
  console.log(lista);
  function retornaMenor(lista, posicaoAtual) {
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
        return posicao;
      }
    } else if (posicao < length) {
      return retornaMenor(lista, posicao + 1, posicaoAtual);
    } else {
      return posicaoAtual;
    }
  }

  for (let i = 0; i < 4; i++) {
    const x = lista[i];
    let menor = retornaMenor(lista, i);
    lista[i] = lista[menor];
    lista[menor] = x;
  }

  console.log(lista);
}

function forWayTodo(lista, tamanho) {
  console.log(lista);

  for (let i = 0; i < tamanho; i++) {
    menorIndice = i;

    for (let j = i + 1; j < tamanho + 1; j++) {
      if (lista[menorIndice] > lista[j]) {
        menorIndice = j;
      }
    }

    let aux = lista[i];
    lista[i] = lista[menorIndice];
    lista[menorIndice] = aux;
  }
  return;
}

forWayTodo(lista, 4);
console.log(lista);
