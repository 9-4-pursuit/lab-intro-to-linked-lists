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
  // 1. Create a method called `insert` that takes in a `data` argument and creates a new `Node` with the data and adds it to the front of the list.
  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === null) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  search(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // getkth(k) {
  //   let currentNode = this.head;
  //   let count = 1;
  //   while(currentNode) {
  //     if(count === k) {
  //       return currentNode;
  //     }
  //     currentNode = currentNode.next;
  //     count++;
  //   }
  //   return null;
  // }

  getKth(k) {
    let currentNode = this.head;
    let count = 1;
    while (currentNode) {
      if (count === k) {
        return currentNode;
      }
      currentNode = currentNode.next;
      count++;
    }
    return null;
  }

  getKthToLast(k) {
    let currentNode = this.head;
    let count = 1;
    while (currentNode) {
      if (count === this.size() - k) {
        return currentNode;
      }
      currentNode = currentNode.next;
      count++;
    }
    return null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.head = null; //clear the head and tail and set the length to 0 to clear the list
  }

  toArray() {
    let currentNode = this.head;
    let array = [];
    while (currentNode) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }

  // delete(position) {
  //   let currentNode = this.head;
  //   let count = 1;
  //   while (currentNode) {
  //     if (count + 1 === position) {
  //       let temp = currentNode.next.next;
  //       currentNode.next = temp;
  //       return this.head;
  //     }
  //     currentNode = currentNode.next;
  //     count++;
  //   }
  //   return currentNode
  // }

  delete(data) {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.data === data) {
        if (previousNode) {
          previousNode.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  containsDuplicates() {
    let currentNode = this.head;
    let array = [];
    while (currentNode) {
      if (array.includes(currentNode.data)) {
        return true;
      }
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
