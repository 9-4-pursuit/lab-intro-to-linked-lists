const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
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
    //return null;
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

  insert(value) {
    let newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
  }

  isEmpty() {
    return this.head === null;
  }//THEORIZED

  delete(key) {

    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode && currentNode.data !== key) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = currentNode.next

  }

  getKth(kth) {
    let count = 1;
    let currentNode = this.head;
    while (count < kth) {
      count++
      currentNode = currentNode.next
    }
    return currentNode
  }

  getKthToLast(kth) {
    let count = 1;
    let currentNode = this.head;
    while (count < this.size() - kth) {
      count++
      currentNode = currentNode.next
    }
    return currentNode
  }

  toArray() {
    const currentNode = this.head
    const arr = [];
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }

  containsDuplicates() {
    let arr = this.toArray();
    let set = new Set(arr);
    return arr.length !== set.size;
  }
};

module.exports = {
  Node,
  LinkedList,
};
