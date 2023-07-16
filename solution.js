const { nums, words } = require("./data/data.js");

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList{
  constructor(head = null, tail = null, length = 0){
    this.head = head
    this.tail = tail
    this.length = length

  }

  //methods
  insert(data){
  let newNode = new Node(data)
  newNode.next = this.head;
  this.head = newNode
  }
  
  size(){
    let count = 0
    let currentNode = this.head;
    while (currentNode){
      count++;
      currentNode = currentNode.next
    }
    return count
  }
  
  //by key
  delete(){
   
  } 
  

  //element
  getFirst(){
    return this.head
  }
  

  //emelent
  getLast(){
    let currentNode = this.head 
    while (currentNode.next != null) {
        currentNode = currentNode.next
    }
    return currentNode

  }
  

  // an element by key and return data
  search(data){
    let currentNode = this.head
    while(currentNode != null){
      if(currentNode.data === data){
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  } 
  

  //retrieve kth element
  getKth(){} 
  

  //retrieve kth from last element
  getKthToLast(){}
  

  //check if list is empty

  isEmpty(){
   
  
  }
  

  //the linked list
  clear(){
    this.head = null
  }
  
  //convert data from linked list to an array
  toArray(){}
  

  //check for duplicates - return true if contains duplicates, false if not
  containsDuplicates(){}
}


module.exports = {
  Node,
  LinkedList,
};
