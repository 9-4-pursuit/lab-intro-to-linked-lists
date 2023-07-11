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
    if (!this.head) {
      this.count = 0;
    } else {
      this.count = 1;
    }
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
  size() {
    let size = this.count;
    return size;
  }
  delete(key) {
    // i want to loop thru the ll until the data inside the node matches the data given

    let current = this.head;

    if (current.data === key) {
      this.head = null;
    } else {
      while (current.next.data !== key) {
        current = current.next;
      }
      current.next = null;
    }
    this.count--;
  }
}

module.exports = {
  Node,
  LinkedList,
};
