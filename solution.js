const { nums, words } = require("./data/data.js");

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
};

class LinkedList {
    constructor(head = null) {
        this.head = head;
    };

    insert(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size(){
        let count = 0;
        let currentNode = this.head;
        while (currentNode != null) {
            count++;
            currentNode = currentNode.next;
        };
        return count;
    };
};

module.exports = {
  Node,
  LinkedList,
};
