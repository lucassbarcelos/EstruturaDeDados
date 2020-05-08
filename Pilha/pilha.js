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
    let resto = lista;
    lista = { value: valor, proximo: resto };
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

fila = metodos.addPrimeiro("minha primeira ação", fila);

console.log("lista", fila);

// console.log(fila);
ultimo = fila; //{value:1, proximo: null}
//{value:1, proximo: null}

fila = metodos.addInicio("minha segunda acaoo", fila);

console.log("lista", fila);

fila = metodos.remove(fila);
fila = fila.proximo;

console.log(
  "Esqueci os acentos preciso dar um Cmnd + Z \n",
  JSON.stringify(fila)
);

fila = metodos.addInicio("minha segunda ação", fila);

console.log(
  "Pronto bem melhor do que uma referencia de pratos pra lavar  \n",
  JSON.stringify(fila)
);
