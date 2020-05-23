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

  return {
    addPrimeiro: (value, lista) => addPrimeiro(value, lista),
    addFinal: (value, lista) => addFinal(value, lista),
    addInicio: (value, lista) => addInicio(value, lista),
    percorreLista: (value, lista) => percorreLista(lista),
    buscaPrimeiroNull: (lista) => buscaPrimeiroNull(lista),
    remove: (lista) => remove(lista),
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
}
popularlista();

// eu preciso insertir 25
//

// insertSort();

// 25

console.log("ultimo", JSON.stringify(fila));
