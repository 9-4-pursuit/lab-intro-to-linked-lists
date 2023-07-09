const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let newNode = new Node(5);
let secondNode = new Node(6);
newNode.next = secondNode;

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  delete(key) {
    if (!this.head) {
      return;
    }

    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode && currentNode.data !== key) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;
  }

  getLast() {
    return this.head;
  }

  getFirst() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  search(key) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.data === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  clear() {
    this.head = null;
  }

  getKth(index) {
    const array = this.toArray();
    array.unshift('placeholder');
    if (index < 0 || index >= array.length) {
      return null;
    }
    const data = array[index];
    return this.search(data);
  }
  
  getKthToLast(index) {
    const array = this.toArray();
    if (index < 0 || index >= array.length) {
      return null;
    }
    const data = array[array.length - 1 - index];
    return this.search(data);
  }

  toArray() {
    let currentNode = this.head;
    const array = [];

    while (currentNode) {
      array.unshift(currentNode.data);
      currentNode = currentNode.next;
    }

    return array;
  }

  containsDuplicates() {
    const seen = new Set();
    let currentNode = this.head;

    while (currentNode) {
      if (seen.has(currentNode.data)) {
        return true;
      }
      seen.add(currentNode.data);
      currentNode = currentNode.next;
    }
    return false;
  }
  
  isEmpty() {
    if (!this.head) {
      return true;
    } else {
      return false;
    }
  }

}


module.exports = {
  Node,
  LinkedList,
};
