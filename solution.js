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
    // this.lastNode = null;
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    // console.log(`Inserted ${value} at the end of the linked list.`);
  }

  // insert(data) {
  //   const newNode = new Node(data);

  //   if (this.head === null) {
  //     this.head = newNode;
  //     this.lastNode = newNode; // Update lastNode when inserting the first node
  //   } else {
  //     this.lastNode.next = newNode;
  //     this.lastNode = newNode; // Update lastNode to the newly inserted node
  //   }
  //   console.log(`Inserted ${data} at the end of the linked list.`);
  // }

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
    //lets start at the top of our node
    let counter = 0;
    //counter is here to keep track of our index of our data for deletion
    while (node.data !== data && node.next) { // this while compares the data at index to the data we are looking to delete and it takes in the next index if it is not null
      counter++; //keeps incrementing
      node = node.next; // updates the node to the next node in the sequence -- keep moving through the loop
    } //outside the loop we want to move our node for deletion and set it to a variable
    let foundNode = node; //from there intros a new instance of the found value for deletion
    node = this.head; //reset to beginning of the list because we found the one we want to delete
    //!re-initialize the link lists!
    // all linked lists are linked together -- only want to cut off this one.
    // if counter is the index of the found node -- that means counter is at 4 for example. want to stop right before it.
    for (let i = 0; i < counter - 1; i++) 
    //the -1 means we stop right before the done we want to delete.
    // this loop is to loop through the entire list from before the foundNode value.
    {
      node = node.next; //init the node
      //adds to the linked list 
      //this loop keeps going until right before the foundNode value all because of counter keeping track of the index of foundNode.
      
    }
    node.next = foundNode.next;
    //takes the current node and drops the foundNode and connects to the next value
  }
   getFirst(){
    return this.head;
   }

   getLast(){
    if (this.head == null){
      return "Null list; no last element";
   }
   let currentNode = this.head;
   while (currentNode.next !== null){
    currentNode = currentNode.next;
   }
   return currentNode
  }
   search(key){
    if (this.head == null){
      return "No elements in list; key not found"
    }
    let currentNode = this.head;
    while (currentNode){
     if (currentNode.data === key) {
      return currentNode;
    }
    currentNode = currentNode.next;
   }
   return "key not found in list.";
  }
  
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

