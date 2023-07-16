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
      //how to iterate or traverse to the next
      currentNode = currentNode.next
    }
    return count
  }
  
  //by key
  delete(key){
    let currentNode = this.head;
    let count = 0;
    while (count < key - 1) {
      currentNode = currentNode.next;
      count++;
    }
    //to skip over/pop
    currentNode.next = currentNode.next.next;
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
  getKth(k){
let currentNode = this.head
let count = 0
while(currentNode < k){
  count++
  currentNode = currentNode.next
}
return currentNode
  } 
  

  //retrieve kth from last element
  getKthToLast(k){
    let currentNode = this.head;
    let size = this.size();

    while (size - 1 > k) {
      // console.log(currentNode);
      currentNode = currentNode.next;
      size--;
    };
    return currentNode;
  }
  

  //check if list is empty

  isEmpty(){
//  if (this.head){
//   return false
//  } else {
//   return true
//  }
//or
if (this.size() == 0){
  return true
} else {
  return false
}
  }
  

  //the linked list
  clear(){
    this.head = null
  }
  
  //convert data from linked list to an array
  toArray(){
let currentNode = this.head
this.array = []
while (currentNode) {
  this.array.push(currentNode.data)
  currentNode = currentNode.next
}
return this.array
  }
  

  //check for duplicates - return true if contains duplicates, false if not
  containsDuplicates(data){
let currentNode = this.head
let array = []
while(currentNode){
  if(array.includes(currentNode.data)){

    return true
  } else {
array.push(currentNode.data)
currentNode = currentNode.next
} 
}
return false
}

}

module.exports = {
  Node,
  LinkedList,
};
