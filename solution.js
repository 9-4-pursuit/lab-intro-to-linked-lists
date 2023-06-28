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
    return this.head ? this.head : null
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  search(position) {
    let count = 0;
    let currentNode = this.head;
    while (count - 1 < position) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getKth(k) {
    let count = 1;
    let currentNode = this.head;
    while (count < k) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getKthToLast(k) {
    let count = 1;
    let currentNode = this.head;
    while (count < this.size() - k) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  isEmpty() {
    return !this.head ? true : false
  }

  clear() {
    this.head = null;
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
