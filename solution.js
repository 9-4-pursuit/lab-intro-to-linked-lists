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
    this.length = 0;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }
  size() {
    return this.length;
  }
  delete(key) {
    if (this.head.data === key) {
      this.head = this.head.next;
      this.length --;
      return "Deletion successful."
    }
    let previousNode = this.head;
    let currentNode = previousNode.next;
    while (currentNode !== null) {
      if (currentNode.data === key) {
        previousNode.next = currentNode.next;
        this.length --;
        return "Deletion successful.";
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    return "Element with this key not found."
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (this.head === null) {
      return "Null list; no last element";
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  // return data
  search(key) {
    if (this.head === null) {
      return "No elements in list; key not found."
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return "Key not found in list.";
  }
  //get kth element
  getKth(k) {
    let currentNode = this.head;
    for (let i = 1; i < k; i++) {
      if (currentNode) {
        currentNode = currentNode.next;
      }
    }
    if (currentNode) {
      return currentNode;
    } else {
      return null;
    }
  }
  // get kth from last element
  getKthToLast(k) {
    let currentNode = this.head;
    for (let i = 1; i < (this.length - k); i++) {
      if (currentNode) {
        currentNode = currentNode.next;
      }
    }
    if (currentNode) {
      return currentNode;
    } else {
      return null;
    }
  }
  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }
  clear() {
    this.head = null;
  }
  toArray() {
    if (this.head === null) {
      return [];
    } else {
      let thisNode = this.head;
      const returnArray = [];
      while (thisNode) {
        returnArray.push(thisNode.data);
        thisNode = thisNode.next;
      }
      return returnArray;
    }
  }
  containsDuplicates() {
    return this.toArray().length !== [...new Set(this.toArray())].length;
  }
}

module.exports = {
  Node,
  LinkedList,
};
