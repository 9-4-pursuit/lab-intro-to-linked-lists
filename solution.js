const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.head
    while (currentNode != null) {
        count++
        currentNode = currentNode.next
    }

    return count;
};

delete(key) {
        
  let currentNode = this.head
  let count = 0
  while (currentNode && currentNode.next) {

      if ((count + 1) === key) {
          
          currentNode.next = currentNode.next.next
          return this.head
      }
      currentNode = currentNode.next
      count ++
  }
  return this.head
}

getFirst() {
  return this.head
}

getLast() {
  let currentNode = this.head 
  while (currentNode.next != null) {
      currentNode = currentNode.next
  }
  return currentNode
}

search(value) {
  let currentNode = this.head
  while (currentNode != null) {
      if (currentNode.data === value) {
          return currentNode
          // return true 
      }
      currentNode = currentNode.next
  }
  return null;
}


getKth(k) {

  let currentNode = this.head;
  let count = 1;

  while (currentNode) {
    if (count === k) {
      return currentNode;
    }
    currentNode = currentNode.next;
    count++;
  }
}




getKthToLast(key) {
  if (key < 1) return null;
  let pointer = this.head;
  let pointer2 = this.head;
  for (let i = 0; i < key; i++) {
    if (!pointer2) {
      return null;
    }
    pointer2 = pointer2.next;
  }
  while (pointer2.next) {
    pointer2 = pointer2.next;
    pointer = pointer.next;
  }
  return pointer;
}








}

module.exports = {
  Node,
  LinkedList,
};
