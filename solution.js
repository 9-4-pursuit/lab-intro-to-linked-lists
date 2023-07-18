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
  delete(index) {
    let current, second;
    if (index < 0 || index >= this.count) {
      return "this is an invalid entry.";
    } else if (index == 0) {
      current = this.head;
      second = this.head.next;
      this.head = second;
    } else {
      current = this.head;
      let counter = 0;
      while (counter < index - 1) {
        // i think looping i should be looking at the next index
        current = current.next;
        counter++;
      }
      current.next = current.next.next;
    }
    this.count--;
  }
  getFirst() {
    return this.head ? this.head : null;
  }

  getLast() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    return current;
  }
  getKth(givenData) {
    // i have a piece of data, i want to be able to go thru each node of
    // let current = this.head;
    // if (!current) {
    //   return;
    // } else if (current) {
    //   while (current.data !== givenData) {
    //     current = current.next;
    //   }
    //   return current;
    // }
  }

  search() {}

  isEmpty() {
    return !this.head ? true : false;
  }

  clear() {
    return (this.head = null);
  }
}

module.exports = {
  Node,
  LinkedList,
};
