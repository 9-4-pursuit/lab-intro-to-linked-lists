const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
}
}


module.exports = {
  Node,
  LinkedList,
};

