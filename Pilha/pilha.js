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

console.log("Escrevendo um texto ou codigo \n");

fila = metodos.addPrimeiro("minha primeira ação\n\n", fila);

console.log("lista\n", fila);

// console.log(fila);
ultimo = fila; //{value:1, proximo: null}
//{value:1, proximo: null}

fila = metodos.addInicio("minha segunda acaoo\n\n", fila);

console.log("lista", fila);

fila = metodos.remove(fila);
fila = fila.proximo;

console.log(
  "Esqueci os acentos preciso dar um Cmnd + Z \n\n",
  JSON.stringify(fila)
);

fila = metodos.addInicio("minha segunda ação\n\n", fila);

console.log(
  "Pronto bem melhor do que uma referencia de pratos pra lavar  ",
  JSON.stringify(fila)
);
