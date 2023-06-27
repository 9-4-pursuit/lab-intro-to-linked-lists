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

  insert(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    console.log(`Inserted ${data} at the end of the linked list.`);
  }


  // size()
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

