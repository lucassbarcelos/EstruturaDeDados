function LinkedList() {
  const Node = (value) => {
    return {
      value: value,
      proximo: null,
    };
  };

  const percorreLista = (valor, lista) => {
    if (valor > lista.value && valor > lista.proximo) {
      return lista;
    } else {
    }
  };

  const addInicio = (valor, lista) => {
    let resto = lista;
    lista = { value: valor, proximo: resto };
    return lista;
  };

  const addPrimeiro = (valor, lista) => {
    lista = Node(valor);
    return lista;
  };

  const addFinal = (valor, ultimo) => {
    ultimo.proximo = Node(valor);
    return ultimo.proximo;
  };

  const insertSort = (lista) => {
    console.log(lista);
    
    let aux = lista;

    while (lista.proximo) {

      trocaOuNaoTroca(lista, aux);

      console.log(JSON.stringify(lista));

      lista = lista.proximo;
      
    }
  };

  function trocaOuNaoTroca(atual, lista) {

  }
  return {
    addPrimeiro: (value, lista) => addPrimeiro(value, lista),
    addFinal: (value, lista) => addFinal(value, lista),
    addInicio: (value, lista) => addInicio(value, lista),
    percorreLista: (value, lista) => percorreLista(lista),
    buscaPrimeiroNull: (lista) => buscaPrimeiroNull(lista),
    remove: (lista) => remove(lista),
    insertSort: (value, lista) => insertSort(value, lista),
  };
}
const metodos = new LinkedList();
let fila;
let ultimo;
let aux;
let primeiroFila;

fila = metodos.addPrimeiro(1, fila);

function popularlista() {
  ultimo = fila;
  aux = metodos.addFinal(10, ultimo);
  ultimo = metodos.addFinal(20, aux);
  aux = metodos.addFinal(30, ultimo);
  ultimo = metodos.addFinal(25, aux);
  aux = metodos.addFinal(21, ultimo);
}
popularlista();

// eu preciso insertir 25
//

// insertSort();
/*
  1 > 25
  10 > 25
  20 > 25
  aux = 30 
  lista.value = 25
  lista.proximo = 30
  30 > 25
*/

// 25

console.log("ultimo", JSON.stringify(fila));
metodos.insertSort(fila, 4);
console.log("ultimo", JSON.stringify(fila));
// metodos.insertSort(21, fila);
// console.log("ultimo", JSON.stringify(fila));
// metodos.insertSort(35, fila);
// console.log("ultimo", JSON.stringify(fila));
// metodos.insertSort(0, fila);

// console.log("ultimo", JSON.stringify(fila));
[1, 10, 20, 30, 25, 21];
