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

    delete(value) {
        let currentNode = this.head;
        if (currentNode.data === value){
            this.head = currentNode.next;
            return this.head;
        }
        while (currentNode.next){
            if (currentNode.next.data === value){
                currentNode.next = currentNode.next.next;
                return this.head;
            }
            currentNode = currentNode.next;
        }
    }
};

module.exports = {
  Node,
  LinkedList,
};
