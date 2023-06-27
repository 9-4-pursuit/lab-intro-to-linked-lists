const { nums, words } = require("./data/data.js");


class Node {
  constructor(data) {
      this.data = data;
      this.next = null; 
  }
};


class LinkedList {
  constructor(head = null) {
      this.head = head
  };

  size() {
      let count = 0;
      let currentNode = this.head;
      while(currentNode) {
          count++;
          currentNode = currentNode.next;
      }
      return count; 
  };

  search(value) {
      let currentNode = this.head;
      while(currentNode) {
          if (currentNode.data === value) {
              return currentNode;
          };
          currentNode = currentNode.next;
      };
  };

  clear() {
      this.head = null; 
  }

  getFirst() {
      return this.head;
  }

  getLast() {
      let currentNode = this.head
      while(currentNode.next != null){
      currentNode = currentNode.next;
      }
      return currentNode;
  }

  insert(value) {
      let newNode = new Node(value);
      if(!this.head){
          this.head = newNode;
      } else {
          newNode.next = this.head;
          this.head = newNode;
      }
  }


  delete(position) {
      if (position <= 0 || position > this.size()) {
          return;
        }
        if (position === 1) {
          this.head = this.head.next;
          return;
        }
        let currentNode = this.head;
        let count = 1;
        while (count < position - 1) {
          currentNode = currentNode.next;
          count++;
        }
        currentNode.next = currentNode.next.next;
  };

  isEmpty() {
    let count = 0;
    let currentNode = this.head;
    while(currentNode) {
        count++;
        currentNode = currentNode.next;
    }
    if(count === 0){
      return true
    } else {
      return false
    }
  }

  getKth(position) {
    let count = 0;
    let currentNode = this.head;
    while(currentNode != null) {
      count ++
      if(count === position){
        return currentNode
      }
      currentNode = currentNode.next
    }
  }

  getKthToLast(kth) {
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < kth; i++) {
      fast = fast.next.next;
    }
    while (fast != null) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }

  toArray() {
    let currentNode = this.head
    let arr = []
    while(currentNode) {
      arr.push(currentNode.data)
      currentNode = currentNode.next
    }
    return arr
  }

  containsDuplicates() {
    let visited = new Set();
    let currentNode = this.head;
    while (currentNode) {
      if (visited.has(currentNode.data)) {
        return true;
      }
      visited.add(currentNode.data);
      currentNode = currentNode.next;
    }
    return false;
  }
};

let numsHead = new Node(nums[0])
let list = new LinkedList(numsHead);
for (let i = 1; i < nums.length; i++) {
  let currentNode = new Node(nums[i]);
  numsHead.next = currentNode;
  numsHead = currentNode;
}

console.log(list.getKth(5),"test", list.getKthToLast(1))


module.exports = {
  Node,
  LinkedList,
};
