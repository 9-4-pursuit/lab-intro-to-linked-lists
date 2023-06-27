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

  insert()
  size()
  delete()
  getFirst()
  getLast()
  search()
  getKthToLast()
  isEmpty()
  
  clear() {

  }
  containsDuplicates()
}


module.exports = {
  Node,
  LinkedList,
};

