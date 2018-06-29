'use strict';

//this class keeps track of value and next
//value contains the piece of data
//next points to the next node in the chain
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
    if (next) {
      this.next = next;
    }
  }
}

class LinkedList {
  constructor() { // constructor is a specific method run on the class of LinkedList
    this.root = null;
  }
    //// example 1
  // static is an instance method, attaches to the class (NO THIS KEYWORD)
  // static fromArray(items) {
  //   let previousNode = null;
  //   for (var i = items.length - 1; i >= 0; i--) {
  //     let node = new ListNode(items[i]);
  //     node.next = previousNode;
  //     previousNode = node;
  //   }
  //   let list = new LinkedList();
  //    list.root = previousNode;
  //   return list;
  // }

  //// example 2
  static fromArray(items) {
    let newList = new LinkedList();
    for (var i = items.length - 1; i >= 0; i--) {
      newList.prepend(items[i]);
    }
    return newList;
  }

  // you get this method for free.
  toString() {
    let result = 'root';
    let current = this.root;
    while (current) {
      result += ' -> ' + current.value;
      current = current.next;
    }
    return result + ' -> null';
  }

  
}

  module.exports = {LinkedList, ListNode}