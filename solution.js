const { nums, words } = require("./data/data.js");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  };
};


class LinkedList {
  constructor(head = null){
    this.head = head;
  };

//insert
insert(data){
  const newNode = new Node(data);
  if(!this.head){
    this.head = newNode;
  }else{
  
   newNode.next = this.head; 
   this.head = newNode;
  }
}

//size
size(nums){
  let count = 0;
  let currentNode = this.head;
  while(currentNode){
    count++
    currentNode = currentNode.next;
  }
  return count;
};

delete(key){
if(!this.head){
  return null;
};
let current = this.head;
let previous = null;

while(current && current.data != key){
  previous = current;
  current = current.next;
};
if(current){
  previous.next = current.next;
};
};
//first
getFirst(){
    return this.head;
  };

//last
getLast(){
  let current = this.head;
  while(current && current.next){
    current = current.next
  }
  if(!current.next){
    return current
  }
  return null;
};

search(key){
  let current = this.head;
  let previous = null;
  while(current && current.data != key){
    previous = current;
    current = current.next;
  }
  return current
};

getKth(k){
  let current = this.head;
  while(current < k ){
    current = current.next
  }
  return current
};

getKthToLast(k){
  let current = this.head;
  let target = this.head;

  for(let i =0; i < k; i++){
    current = current.next
   
  }
  while(current.next){
    current = current.next;
    target = target.next
  }
  return target
};

isEmpty(){
  let current = this.head
  if(!current){
    return true
  } else {
    return false
  }
};

clear(){
  this.head = null
};

toArray() {
  let current = this.head;
  let newArr = [];
  while(current){
    newArr.push(current.data);
    current = current.next;
  }
  return newArr;
};

containsDuplicates(){
  const set = new Set()
  const match = []
  let current = this.head;

  while(current){
    if(set.has(current.data)){
      match.push(current.data);

    } else {
      set.add(current.data)
    }
    current = current.next;
  }
 return match.length > 0 ? true : false
}
 
};


// const newNode = new Node(nums);

// console.log(newNode.getLast());




module.exports = {
  Node,
  LinkedList,
};