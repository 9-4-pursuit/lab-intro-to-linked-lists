const { nums, words } = require("./data/data.js");

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// const panagram = [
//   "The",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  };

  size() {
     let count = 0;
     let currentNode = this.head
     while (currentNode != null) {
      count++
      currentNode = currentNode.next
     }
     return count;
  };

  search(value) {
    let currentNode = this.head
    while (currentNode != null) {
      if (currentNode.data === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null;
  }

  clear() {
    this.head = null;
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
};

module.exports = {
  Node,
  LinkedList,
};
