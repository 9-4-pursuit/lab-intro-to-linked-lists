const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
    this.count = 0
  }

  insert(value) {
    let newNode = new Node(value)
    this.head = newNode
    let current = this.head
    current = newNode.next
    this.count++
  }

  size() {
    // let count = 0;
    // let currentNode = this.head
    // while (currentNode) {
    //   count++;
    //   currentNode = currentNode.next
    // }
    // return count
    return this.count
  }

  delete(key) {
    let currentNode = this.head
    if (currentNode.data === key) {
      currentNode = currentNode.next
      return currentNode
    }
    while (currentNode != null) {
      if (currentNode.data === key) {
        let temp = currentNode.next.next
        currentNode.next = temp
        return currentNode
      }
      currentNode = currentNode.next
    }
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let currentNode = this.head
    if(currentNode.next == null){
      return currentNode
    } else{
      while (currentNode != null) {
        currentNode = currentNode.next
      }
    }
    return currentNode
  }

  search(value) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
  }

  getKth(k) {
    let count = 0;
    let currentNode = this.head
    if (k === 1) {
      return currentNode
    }
    while (currentNode) {
      if (count++ == k) {
        return currentNode.next
      }
      count++
      currentNode = currentNode.next
    }
  }

  getKthToLast(k) {
    let currentNode = this.head
    for (let i = 1; i < (this.count - k); i++) {
      if (currentNode) {
        currentNode = currentNode.next
      }
    }
    return currentNode ? currentNode : null
  }

  clear() {
    return this.head = null
  }

  isEmpty() {
    return this.head == null
  }

  toArray() {
    let current = this.head
    let newArr = []
    while (current != null) {
      newArr.push(current.data)
      current = current.next
      console.log(newArr)
    }
    return newArr
  }

  containsDuplicates() {
    return this.count !== [...new Set(this.toArray())].length
  }
}

module.exports = {
  Node,
  LinkedList,
};
