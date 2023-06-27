const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  while (currentNode) {
    if ((count + 1) === position) {
        let temp = currentNode.next
        currentNode.next = newNode
        newNode.next = temp
        return this.head
    }
    currentNode = currentNode.next
    count++
}

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  delete(position) {
    let count = 1;
    let currentNode = this.head;
    while (count < position - 1) {
      count++;
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
  }

  getFirst() {
    this.head ? this.head : null
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  search() {

  }

  getKth() {

  }

  getKthToLast() {

  }

  isEmpty() {

  }

  clear() {

  }

  toArray() {

  }

  containsDuplicates() {

  }

}

module.exports = {
  Node,
  LinkedList,
};
