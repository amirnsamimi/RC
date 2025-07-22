class notInRange extends Error {
  constructor() {
    super(
      "Number input does not exist in range. (  minus number or larger than size )"
    );
  }
}

class emptyList extends Error {
  constructor() {
    super("list is empty");
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/** 
 * @function #insert: defined according to exersice on rahnama websie 
 * @function #insertList: defined according to exersice on rahnama websie 
 * 
 * @function appened: is same as insertList ( only name updated )
 * @function prepend: is same as insert ( only name updated )
 * 
 * @author Amir Samimi, 2025, Rahnama Collage
 * **/ 


class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  #insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  #insetList(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  prepend(value) {
    this.#insert(value);
  }
  append(value) {
    this.#insetList(value);
  }

  size() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  at(n) {
    if (n < 1) throw new notInRange();
    let curr = this.head;
    for (let i = 1; i <= n; i++) {
      if (i === n) {
        return curr;
      }
      curr = curr.next;
      if (curr === null) throw new notInRange();
    }
  }

  join(otherLinkList) {
    if (this.head === null) {
      this.head = otherLinkList;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = otherLinkList.head;
  }

  map(fn) {
    if (this.head === null) throw new emptyList();
    let curr = this.head;
    while (curr.next) {
      curr.value = fn(curr.value);
      curr = curr.next;
    }
  }

  filter(conditionalFunction) {
    if (this.head === null) throw new emptyList();
    let curr = this.head
    const newList = new LinkedList()
    while(curr.next){
        if(conditionalFunction(curr.value)){
            newList.prepend(curr.value)
        }
        curr = curr.next

    }
    return newList
  }
}

const list = new LinkedList();

list.append("a");
list.append("b");
list.prepend("c");
list.append("d");

const list2 = new LinkedList();

list2.append("1");
list2.append("2");
list2.prepend("3");
list2.append("4");



// SIZE
// console.log(list.size())

// AT
// console.log(list2.at(2))

// JOIN 
// list.join(list2);

// MAP
// console.log(list2)
// list2.map((value)=> value = null )
// console.log(list2)

// FILTER
// console.log(list.filter((x)=> x ===  "a" || x === "b" ))

