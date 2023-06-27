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

  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) { // this while compares the data at index to the data we are looking to delete 
      counter++; //keeps incrementing
      node = node.next; // updates the node to the next node index
    }
    let foundNode = node; //intros a new instance of the found value for deletion
    node = this.head; //rest to beginning of the list
    for (let i = 1; i < counter; i++) 
    // this loop is to loop through the entire list from before the foundNode value.
    {
      node = node.next;
      //this loop keeps going until right before the foundNode value all because of counter keeping track of the index of foundNode.
      
    }
    node.next = foundNode.next;
    //takes the current node and drops the foundNode and connects to the next value
  }
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

