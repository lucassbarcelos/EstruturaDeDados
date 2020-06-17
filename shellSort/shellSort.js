let teste = [5, 4, 9, 7, 3, 0, 1, 2];
console.log("before", teste);
function shellSort(array, tamanho) {
  let outro = parseInt(tamanho / 2);
  while (outro > 0) {
    for (let i = 0; i < tamanho; i++) {
      trocaOuNaoTroca(array, i, outro, tamanho);
    }
    outro = parseInt(outro / 2);
  }
}
function trocaOuNaoTroca(array, index, divisor, tamanho) {
  if (array[index] > array[index + divisor] && index + divisor < tamanho) {
    let aux = array[index];
    array[index] = array[index + divisor];
    array[index + divisor] = aux;
  }
}
shellSort(teste, 8);
console.log("after", teste);
