const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    // this.size = 0;
  }

insert(key) {
  let node = new Node(key);
  node.next = this.head;
  this.head = node;
}

size() {
  let count = 0;
  let node = this.head;
  while(node) {
    count++;
    node = node.next
  }
  return count;
 }

delete(key) {
  let node = this.head;
  while(node.next.data !== key) {
    node = node.next;
  }
  node.next = node.next.next;
}

getFirst() {
  return this.head;
 }

 getLast() {
  let node = this.head;
  while(node.next) {
    node = node.next;
  }
  return node;
 }

search(key) {
  let node = this.head;
  while(node) {
    if(node.data === key) {
      return node;
    }
    node = node.next;
  }
}

getKth(k) {
  let node = this.head;
  let order = 1;

  while(node) {
    if(k = order) {
      return node;
    }
    node = node.next;
    order++;
  }
}

getKthToLast(k) {
  let node = this.head;
  let order = 1;
  let size = this.size();

  while(node) {
    if(order === size - k) {
      return node;
    }
    order++;
    node = node.next;
  }
}

isEmpty() {
  return !this.head;
}

clear() {
  this.head = null;
}

toArray() {
  let node = this.head;

  const array = []
  while(node) {
    array.push(node.data)
    node = node.next;
  }
  return array;
}

containsDuplicates() {
  const arr = [];
  let node = this.head;
  
  while(node) {
    if(arr.includes(node.data)) {
      return true;
    }
    arr.push(node.data);
    node = node.next;
  }
  return false;
  };
};

const node = new Node("2");
const listIt = new LinkedList(node);

for(let num of nums) {
  listIt.insert(num);
}

console.log(listIt.containsDuplicates());


module.exports = {
  Node,
  LinkedList,
};
