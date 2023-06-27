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
    //insert the value at the beginning on the list.
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      // [newNode.next, this.head] = [this.head, newNode];
    }
  }

  insertAtLast(value) {
    //insert the value at the last on the list.
    let newNode = new Node(value);
    let currentNode = this.head;
    if (currentNode === null) {
      this.head = newNode;
    } else {
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
}

module.exports = {
  Node,
  LinkedList,
};
