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

  // insertAtFront(value) {
  //   let newNode = new Node(value)
  //   newNode.next = this.head
  //   this.head = newNode
  // }

  insert(value, position) {
    let newNode = new Node(value)
    let currentNode = this.head
    let count = 1

    while (currentNode) {
      if ((count + 1) === position) {
        let temp = currentNode.next
        currentNode.next = newNode
        newNode.next = temp
        return this.head
      }

      currentNode = currentNode.next
      count++
    } 
  }

  isEmpty() {
    return this.head === null;
  }//THEORIZED

  delete(value) {
    return this.value = null;
  }//THEORIZED

  // getKth() {

  // }

  // getKthToLast() {

  // }

  toArray() {
    const currentNode = this.top
    const arr = [];
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next
    }
    return arr;

  }

  // containsDuplicates() {

  // }
 
};

module.exports = {
  Node,
  LinkedList,
};
