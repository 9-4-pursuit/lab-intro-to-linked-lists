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
    this.size = 1;
  }

  insert(data) {
    if (!this.head) {
      this.head = new Node(data);
    }
    let current = this.head;
    let newNode = new Node(data);
    this.head = newNode;
    this.head.next = current;
    this.size++;
  }
}
// let node1 = new Node(20);
// let ll = new LinkedList(node1);
// ll.insert(10);
// ll.insert(5);
// console.log(node1, ll);

module.exports = {
  Node,
  LinkedList,
};
