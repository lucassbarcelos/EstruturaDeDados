function trocar(arr, left, right) {
  var aux = arr[left];
  arr[left] = arr[right];
  arr[right] = aux;
}

function particionar(arr, left, right) {
  var pivot = arr[parseInt((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      trocar(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, left, right) {
  var index;
  index = particionar(arr, left, right);
  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }
  if (index < right) {
    quickSort(arr, index, right);
  }
  return arr;
}
var items = [4, 3, 9, 2, 7, 1, 5, 8];
items = quickSort(items, 0, 7);
console.log(items);
