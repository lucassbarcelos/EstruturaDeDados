function mergeSort(arr, tamanho) {
  if (tamanho < 2) return arr;

  var middle = parseInt(tamanho / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, tamanho);

  return merge(mergeSort(left, middle), mergeSort(right, middle));
}

function merge(left, right) {
  var result = [];
  while (left[0] && right[0]) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left[0]) result.push(left.shift());

  while (right[0]) result.push(right.shift());

  return result;
}

var lista = [4, 3, 9, 2, 7, 1, 5, 8];
lista = mergeSort(lista, 8);
console.log(lista);

//complexidade O(n Log n)
//função shift se equipara ao lista[i++]
//função push se equipara a uma implementação com for para atribuição em uma posição definida no array
//função slice se equipara a pegar a posiçao inicial e do meio - 1 como inicio e fim do array da esquerda e  meio até final como inicio e fim do array da direita
