const { nums, words } = require("./data/data.js");
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  pushIt(val){
    var newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    return this;
}

  // size() {
  //   return this.length;
  // }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    if (this.head === null) {
      return null;
    }
     return this.head.data;
  }

  getLast() {
if(this.head && this.length===1){
  return this.head   
}
 return this.tail.data
  }

delete(key)
{
    if (key < 0 || key >= this.length) return null;
    else {
        var current, previous, initial = 0;
        current = this.head;
        previous = current;
 
        // deleting first element
        if (key === 0) {
            this.head = current.next;
        } else {
            while (initial < key) {
                initial++;
                previous = current;
                current = current.next;
            }
 
            // remove the element
            previous.next = current.next;
        }
        this.length--;
 
        // return the remove element
        return current.data;
    }
}


insert(val){
    var newNode= new Node(val);
    if(!this.head){
      this.head=newNode
    this.tail=this.head;
  }
  else{this.tail.next = newNode
  this.tail=newNode}
  this.length++;
  return this;
  }
  
// toArray(){
// let newArray=[]
// // newArray.push(this.head)
//  let counter = 1
//  var current = this.head
// while (counter !== (this.length+1)){
//   newArray.push(current)
// current = current.next;
// counter++
// }
// return newArray
// }


getFirst() {
  return this.head;
}

getLast() {
return this.tail
  }

clear() {
  this.head = null;
}
// search(index){
//  if (index<0 || index >= this.length){return null}
//  let counter = 0
//  var current = this.head
// while (counter !== index){
// current = current.next;
// counter++
// }
// return current

// }

isEmpty(){
  if(this.length === 0) return true
  return false
}

search(key) {
  let node = this.head;
  while (node !== null && node.data !== key) {
    node = node.next;
  }
  return node;
}

getFirst(index=0){
  if(index < 0 || index >= this.length) return null;
  // var counter = 0;
  var current = this.head;
  // while(counter !== index){
  //     current = current.next;
  //     counter++;
  // }
  return current;
}

getKth(k){
  let counter = 1
  let current = this.head
  while (counter <= k){
   current =  current.next
    counter++
  }
  return current
}


getKthToLast(k){
  let counter = this.length
  while (counter >= k){
  //  current =  current.next
    counter--

  }
let start = 0
  let current = this.head
  while (start<=counter){
   current =  current.next
    start++
  }
  return current
}


toArray(){
  let newArray=[]
  let orderedArray = []
  let counter = 1
  let current = this.head
  let theLength = this.length
  while(counter <= theLength){
    newArray.push(current.data)
   current =  current.next
    counter++
  }

for (let i=0; i<=newArray.length-1; i++){
  orderedArray.push(newArray[i])

}
console.log(orderedArray)
  return orderedArray

}


containsDuplicates(){
  let newArray=[]
  let counter = 1
  let current = this.head
  let theLength = this.length
  while(counter <= theLength){
    newArray.push(current.data)
   current =  current.next
    counter++
  }
  newArray.sort()
let finderHelp;
  let counterSTART = 0
  while(counterSTART<=newArray.length-1){

    finderHelp= newArray[counterSTART+1]

if(newArray[counterSTART]=== finderHelp){
  return true
}
counterSTART++
}
return false

}

// getKth(k){
//   if(index < 0 || index >= this.length) return null;
//   var counter = 0;
//   var current = this.head;
//   while(counter !== index){
//       current = current.next;
//       counter++;
//   }
//   return current;
// }

}




// function getFirst(head){
//   if (head === null) {
//     return null;
//   }
//   return head.data;
//   }

var list = new LinkedList()





// for (let i=0;i <= words.length-1;i++){
//   list.pushIt(words[i])

// }

console.log(list.getFirst())

module.exports = {
  Node,
  LinkedList,
};
