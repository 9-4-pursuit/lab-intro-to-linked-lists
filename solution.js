const { nums, words } = require("./data/data.js");


class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList{
  constructor(head = null){
    this.head = head
  }
  // - `insert`
  insert(val){
    const newNode = new Node(val)
    const curr = this.head
    this.head = newNode
    newNode.next = curr
  }
  // - `size`
  size(){
    let curr = this.head
    let count = 0
    while(curr){
      count++
      curr = curr.next
    }
    return count
  }
  // - `delete` by key 
  
  //not sure if key is value of data or the index in the list. Wish it was more discriptive/clear  
  delete(key){
    if(!key){
      this.head = this.head.next
    }else{
      let c = 1
      let prev = this.head
      let curr = this.head.next
      let next
      while(c <= key){
        if(c === key){
          prev.next = curr.next
        }
        c++
        next = curr.next
        prev = curr
        curr = next
    }
    }
  }
  // - `getFirst` element
  getFirst(){
    return this.head
  }
  // - `getLast` element
  getLast(){
    let curr = this.head
    while(curr.next){
      curr = curr.next
    }
    return curr
  }
  // - `search` an element by key and return data    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  search(key){
    let curr = this.head
    while(curr){
      if(curr.data === key){
        return curr
      }
      curr=curr.next 
    }
  }
  // - `getKth` retrieve kth element  
  getKth(key){
    let curr = this.head
    let c = 1
    while(curr){
      if(c === key){
        return curr
      }
      curr=curr.next 
      c++
    }
  }
  // - `getKthToLast` retrieve kth from last element
  getKthToLast(k){
    let index = this.size() - k
    let curr = this.head
    while(curr){
      if(index==1){
        return curr
      }
      curr = curr.next
      index--
    }
  }
  // - `isEmpty` check if list is empty
  isEmpty(){
    return this.head === null
  }
  // - `clear` the linked list
  clear(){
    this.head = null
  }
  // - `toArray`convert data from linked list to an array
  toArray(){
    let curr = this.head
    const arr = []
    while(curr){
      arr.push(curr.data)
      curr = curr.next
    }
    return arr
  }
  // - `containsDuplicates` check for duplicates - return true if contains duplicates, false if not
  containsDuplicates(){
    let curr = this.head
    let set = new Set()
    while(curr){  
      if(!set.has(curr.data)){
        set.add(curr.data)
        curr = curr.next
      }else{
        return true
      }
    }
    return false
  }
}
module.exports = {
  Node,
  LinkedList,
};
