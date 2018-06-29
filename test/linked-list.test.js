'use strict'

const {LinkedList, ListNode} = require('../lib/linked-list.js');

describe('Essential creation tests', function(){
  test('Make sure at least this test passes', () => {
    expect(1).toEqual(1);
  });

  test('new ListNode should create a node', () => {
    let blue = new ListNode(4);
    expect(blue.value).toEqual(4);
    expect(blue.next).toEqual(null);

    let green = new ListNode(3, blue);
    expect(green.value).toEqual(3);
    expect(green.next).toEqual(blue);
    expect(green.next.value).toEqual(4);
  });

  test('can create a LinkedList and attach nodes together', () => {
    let list = new LinkedList();
    let three = new ListNode(3);
    let four = new ListNode(4);

    list.root = three;
    list.root.next = four;

    expect(list.root.value).toEqual(3);
    expect(list.root.next.value).toEqual(4);
    expect(list.root.next.next).toEqual(null);
  });

  test('list.toString() represents the list', () => {
    let list = new LinkedList();
    let three = new ListNode(3);
    let four = new ListNode(4);

    list.root = three;
    list.root.next = four;

    expect(list.toString()).toEqual('root -> 3 -> 4 -> null');
  });

  test('list.fromArray builds a linked list from an Array', () => {
    let list = LinkedList.fromArray([1,2,3,4])
    expect(list.root.value).toEqual(1)
    expect(list.root.next.value).toEqual(2)
    expect(list.root.next.next.value).toEqual(3)
    expect(list.root.next.next.next.value).toEqual(4)
  });
});