const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
}
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    // console.log(`Inserted ${value} at the end of the linked list.`);
  }

   size(){
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
   }
   
  // delete()
  // getFirst()
  // getLast()
  // search()
  // getKthToLast()
  // isEmpty()

  clear() {
    this.head = null;
  }
  // containsDuplicates()
}



module.exports = {
  Node,
  LinkedList,
};

