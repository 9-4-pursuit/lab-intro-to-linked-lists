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

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  delete(value) {
    //delete by value
    let currentNode = this.head;
    if (currentNode.data === value) {
      this.head = currentNode.next;
    } else {
      while (currentNode.next.data != value && currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
    }
    return this.head;
  }

  getFirst() {
    return this.head;
  };

  getLast() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    };
    return currentNode;
  };

  search(key) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.data !== key) {
      currentNode = currentNode.next;
    };
    return currentNode;
  };

  getKth(index) {
    let currentNode = this.head;
    let count = 1;
    while (currentNode !== null & count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  getKthToLast(index) {
    let currentNode = this.head;
    let count = 1;
    const newIndex = this.size() - index;
    while(currentNode !== null) {
      if (count === newIndex) return currentNode;
      currentNode = currentNode.next;
      count++;
    };
  };

  isEmpty() {
    return this.head === null ? true : false;
  };

  clear() {
    this.head = null;
  };

  toArray() {
    let currentNode = this.head;
    const arr = [];
    while (currentNode !== null) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }

  containsDuplicates() {
    const arr = this.toArray();
    const set = new Set();
    for (let num of arr) {
      if (set.has(num)) return true;
      else set.add(num);
    }
    return false;
  }
}


module.exports = {
  Node,
  LinkedList,
};