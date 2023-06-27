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
    this.head = null;
  }
  containsDuplicates()
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

console.log(list


module.exports = {
  Node,
  LinkedList,
};

