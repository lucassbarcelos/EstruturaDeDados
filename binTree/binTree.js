function plantFork(value) {
  var newFork = {
    left: {},
    value: value,
    right: {},
  };
  return newFork;
}

function inserir(myTree, value) {
  if (myTree.value) {
    if(value > myTree.value){
      inserir(myTree.right,value)
    }else{
      inserir(myTree.left,value)
    }
  }else{
    myTree.left = {}
    myTree.value = value
    myTree.right = {}
  }
}

function buscar(myTree, value) {
  if (!myTree || myTree.value == value) return myTree;
  if (value > myTree.value) return buscar(myTree.right, value);
  return buscar(myTree.left, value);
}

function buscaLargura(tree,value){
  let fila;
  let ultimo;
  let primeiro
  let x
  fila = addPrimeiro(tree, fila);
  primeiro = fila
  ultimo = fila;
  while(fila.value){
    let aux;
    aux = fila.value
    if(aux.value != value){
      if(aux.left) {
        
        x = addFinal(aux.left,ultimo)
      }
      if(aux.right) {
        ultimo = addFinal(aux.right,x)
      }
      fila = fila.proximo
    }else{
      return aux.value
    }
  }
}
function buscaProfundidade(tree,value){
  let pilha;
  let aux;
  pilha = null
  let feito = 0
  aux = tree
  while(feito == 0){
    if( aux && aux.left){
      pilha = addInicio(aux,pilha)
      aux = aux.left == {} ? aux : aux.left
    }else{
      if(pilha){
        aux = pilha.proximo.value 
        pilha = pilha.proximo 
        aux = aux.right 
        if(aux.value == value) return aux
        else   aux = aux.right
      }else{
        feito = 1
      }
    }
  }

}
function remove  (lista) {
  var aux = lista;
  var teste = aux;
  lista = lista.proximo;
  return teste;
};

function addInicio  (valor, lista)  {
  let aux = node(valor)
  if(!lista) return lista = aux
  else{
    aux.proximo = lista
    lista = aux
    return lista
  }
};
function addPrimeiro  (valor, lista){
  lista = node(valor);
  return lista;
};

function addFinal  (valor, ultimo){
  ultimo.proximo = node(valor);
  return ultimo.proximo;
};
function node (value) {
  return {
    value: value,
    proximo: null,
  };
};
function remove  (lista) {
    let resto = lista.proximo;
    lista = { value: null, proximo: resto };
    return lista;
  };


myTree = plantFork(12); // minha raiz
inserir(myTree, 17);
inserir(myTree, 8);
inserir(myTree, 13);
inserir(myTree, 5);
inserir(myTree, 25);
inserir(myTree, 9);

// console.log(buscaLargura(myTree,13))
console.log('foiiiii  ',buscaProfundidade(myTree,17))
// console.log(JSON.stringify(myTree));
// console.log(JSON.stringify(myTree.value));
// console.log(buscar(myTree, 13));

/*O melhor caso da busca binária ocorre quando o elemento que procuramos está no meio do vetor. Dessa forma, 
haverá apenar uma chamada recursiva/iteração. Portanto, o algoritmo tem complexidade constante: Θ(1) ou O(1).

O pior caso ocorre quando o elemento que buscamos não está no vetor. 
Tanto a versão iterativa, como a versão recursiva possuem complexidade de O(log n).*/
