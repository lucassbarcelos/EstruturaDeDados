function LinkedList() {
  let first = null;
  let last = null;
  const Node = value => {
    return {
      value,
      next: null
    };
  };
  const addInIndex = (value, index) => {
    if (!first) {
      first = Node(value);
    }
    if (index == 0) {
      let node = first;
      first = Node(value);
      first.next = node;
    }
    let node = first;
    let count = 0;
    while (count < index - 1) {
      node = node.next;
      count++;
    }
    var proximo = node.next;
    node.next = Node(value);
    node = node.next;
    node.next = proximo;
  };
  const addBefore = value => {
    let aux = first;
    let node = Node(value);
    node.next = aux;
    first = node;
  };
  const addLast = value => {
    if (!first) {
      first = Node(value);
      last = first;
      return;
    }
    last.next = Node(value);
    last = last.next;
    return;
  };
  const getByIndex = index => {
    let node = first;
    let count = 0;
    while (count < index && node.next) {
      node = node.next;
      count++;
    }
    return node;
  };
  const getByValue = value => {
    let node = first;
    while (node.next) {
      if (node.value == value) {
        return node;
      }
      node = node.next;
    }
    return null;
  };
  return {
    add: value => addLast(value),
    addBefore: value => addBefore(value),
    print: () => console.log(first),
    getByIndex: index => getByIndex(index),
    getByValue: value => getByValue(value),
    addInIndex: (value, index) => addInIndex(value, index)
  };
}
const list = new LinkedList();
console.log(list.print());
list.add(1);
console.log(list.print());
list.add(3);
console.log(list.print());
list.addBefore(0);
console.log(list.print());
console.log(list.addInIndex(2, 2));
console.log(list.print());
