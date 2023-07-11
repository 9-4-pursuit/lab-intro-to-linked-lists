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
    this.count = 0;
  }

  insert(data) {
    let newNode = new Node(data);
    let current;
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.count++;
  }
  size() {}
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
