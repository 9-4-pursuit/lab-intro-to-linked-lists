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

  getKthToLast(k) {
    if (k < 1) {
      throw new Error("Invalid value of k.");
    }

    let p1 = this.head;
    let p2 = this.head;

    // Move p1 k nodes ahead
    for (let i = 0; i < k; i++) {
      if (p1 === null) {
        throw new Error("The list does not have k elements.");
      }
      p1 = p1.next;
    }

    // Move both pointers until p1 reaches the end
    while (p1 !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p2.data;
  }
}

module.exports = {
  Node,
  LinkedList,
};
