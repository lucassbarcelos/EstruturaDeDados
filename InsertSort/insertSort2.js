// let teste = [5, 4, 9, 7, 3, 0, 1, 2];
// console.log("before", teste);

// function insertSort(array, tamanho) {
//   for (let i = 0; i < tamanho; i++) {
//     trocaOuNaoTroca(array, i, tamanho);
//   }
// }

// function trocaOuNaoTroca(array, i) {
//   if (array[i] > array[i + 1]) {
//     let aux = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = aux;
//     if (array[i - 1]) {
//       while (array[i - 1] > array[i]) {
//         let aux = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = aux;
//         i--;
//       }
//     }
//   }
// }

// insertSort(teste, 8);
// console.log("after", teste);
// //complexidade n^2

let teste = [5, 4, 9, 7, 3, 0, 1, 2];
const insertionSort = (array, tamanho) => {
  for (let i = 1; i < tamanho; i++) {
    let j = i - 1;
    let tmp = array[i];
    while (j >= 0 && array[j] > tmp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = tmp;
  }
  return array;
};
insertionSort(teste, tamanho);
console.log(teste);
