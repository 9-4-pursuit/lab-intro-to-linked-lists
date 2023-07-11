const { nums, words } = require("./data/data.js");

class Node {
  // every node has a data + a pointer
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

module.exports = {
  Node,
  LinkedList,
};
