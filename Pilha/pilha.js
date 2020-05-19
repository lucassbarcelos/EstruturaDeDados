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
    var removido = lista.proximo;
    var aux = removido.proximo;
    lista.proximo = aux;
    return removido.value;
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
    var aux = lista.proximo;
    lista.proximo = { value: valor, proximo: aux };
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

fila = { value: null, proximo: null };
fila.proximo = { value: "minha primeira ação", proximo: null };

console.log("lista\n", fila);

metodos.addInicio("minha segunda acaoo", fila);

console.log("lista", fila);

console.log(
  "Esqueci os acentos preciso dar um Cmnd + Z \n\n",
  JSON.stringify(fila)
);

console.log("\nItem removido foi:", metodos.remove(fila), "\nPilha\n", fila);

metodos.addInicio("minha segunda ação", fila);

console.log(
  "\n\nPronto bem melhor do que uma referencia de pratos pra lavar\n",
  fila
);
