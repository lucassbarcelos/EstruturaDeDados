// let teste = [5, 4, 9, 7, 3, 0, 1, 2];
// console.log("before", teste);

// function shellSort(array, tamanho) {
//   let outro = parseInt(tamanho / 2);
//   while (outro > 0) {
//     for (let i = 0; i < tamanho; i++) {
//       trocaOuNaoTroca(array, i, outro, tamanho);
//     }
//     outro = parseInt(outro / 2);
//   }
// }

// function trocaOuNaoTroca(array, index, divisor, tamanho) {
//   if (array[index] > array[index + divisor] && index + divisor < tamanho) {
//     let aux = array[index];
//     array[index] = array[index + divisor];
//     array[index + divisor] = aux;
//   }
// }

// shellSort(teste, 8);
// console.log("after", teste);

//melhor dos casos nˆ4/3
function shellSort(arr, tamanho) {
  var gap = parseInt(tamanho / 2);
  while (gap > 0) {
    for (i = gap; i < tamanho; i++) {
      var j = i;
      var temp = arr[i];
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }

      arr[j] = temp;
    }

    if (gap == 2) {
      gap = 1;
    } else {
      gap = parseInt(gap / 2);
    }
  }
  return arr;
}

let teste = [3, 0, 2, 5, -1, 4, 1];
shellSort(teste, 7);
console.log(teste);
