//Uma fila possui um numero definido de elementos
//

function LinkedList() {
  const Node = (value) => {
    return {
      value: value,
      proximo: null,
    };
  };

  const remove = (lista) => {
    let resto = lista.proximo;
    lista = { value: null, proximo: resto };
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

  const addInicio = (valor, lista) => {
    let proximo = lista;
    lista = Node(valor);
    lista.proximo = proximo;
    return lista;
  };

  const percorreLista = (lista) => {
    if (lista) {
      console.log(lista.value);
      percorreLista(lista.proximo);
    }
  };

  const buscaPrimeiroNull = (qualquer) => {
    if (qualquer.value == null) {
      console.log("dentroif", qualquer);
      qualquer = qualquer.proximo;
      buscaPrimeiroNull(qualquer);
    } else {
      console.log("aqui", qualquer);
      return qualquer;
    }
  };

  return {
    addPrimeiro: (value, lista) => addPrimeiro(value, lista),
    addFinal: (value, lista) => addFinal(value, lista),
    addInicio: (value, lista) => addInicio(value, lista),
    percorreLista: (lista) => percorreLista(lista),
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

// console.log(fila);
ultimo = fila; //{value:1, proximo: null}
//{value:1, proximo: null}

aux = metodos.addFinal(10, ultimo);

console.log("lista", fila);

ultimo = metodos.addFinal(20, aux);

console.log("lista", JSON.stringify(fila));

aux = metodos.addFinal(30, ultimo);

console.log("lista", JSON.stringify(fila));

fila = metodos.remove(fila);
fila = fila.proximo;

console.log("lista", JSON.stringify(fila));

ultimo = metodos.addFinal(40, aux);

console.log("lista", JSON.stringify(fila));

fila = metodos.remove(fila);
fila = fila.proximo;

console.log("lista", JSON.stringify(fila));
