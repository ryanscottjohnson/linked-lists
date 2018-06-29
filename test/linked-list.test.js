'use strict'

const {LinkedList, ListNode} = require('../lib/linked-list');

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

describe('O(1) Methods (easy difficulty)', function(){
  test('list.isEmpty() should be true for empty list', () => {
    let list = new LinkedList();
    expect(list.isEmpty()).toEqual(true)
  });

  test('list.isEmpty() should be false for non-empty list', () => {
    let list = new LinkedList();
    list.append(1);
    expect(list.isEmpty()).toEqual(false)
  });

  test('list.prepend(node) should node to empty list', () => {
    let list = new LinkedList();
    list.prepend(5)
    expect(list.root.value).toBe(5);
  });

  test('list.prepend(node) should node to non-empty list', () => {
    let list = new LinkedList();
    list.prepend(5)
    list.prepend(4)
    list.prepend(0)
    expect(list.root.value).toBe(0);
    expect(list.root.next.value).toBe(4);
    expect(list.root.next.next.value).toBe(5);
  });

});

describe('O(N) Methods (medium difficulty)', function(){
  test('list.size() should be 0 for empty list', () => {
    let list = new LinkedList();
    expect(list.size()).toEqual(0);
  });

  test('list.size() should be 1 for one-node list', () => {
    let list = new LinkedList();
    list.append(1);
    expect(list.size()).toEqual(1)
  });

  test('list.size() should be correct for many node list.', () => {
    let list = LinkedList.fromArray([1,2,3,4])
    expect(list.size()).toEqual(4)
  });

  test('list.append(value) should append node to empty list', () => {
    let list = new LinkedList();
    list.append(0);
    expect(list.root.value).toBe(0);
  });


  test('list.append(value) should append node to non-empty list', () => {
    let list = new LinkedList();
    list.append(0);
    list.append(3);
    list.append(4);
    expect(list.root.value).toEqual(0);
    expect(list.root.next.value).toEqual(3);
    expect(list.root.next.next.value).toEqual(4);
  });

  test('list.getNth returns the node at a specific index', () => {
    let list = LinkedList.fromArray([1,2,3,4]);
    expect(list.getNth(0)).toEqual(list.root);
    expect(list.getNth(1)).toEqual(list.root.next);
    expect(list.getNth(2)).toEqual(list.root.next.next);
    expect(list.getNth(3)).toEqual(list.root.next.next.next);
  });

  test('list.find(value) return fist node containg value', () => {
    let list = LinkedList.fromArray([1,2,3,2,1]);
    let result = list.find(2);
    expect(list.root.next).toEqual(result);
  });

  test('list.remove(value) should remove node from one-element list', () => {
    let list = new LinkedList()
    list.append(42);
    list.remove(42);
    expect(list.root).toBe(null)
  });

  test('list.remove(value) should remove node from front of list', () => {
    let list = LinkedList.fromArray([0,1,2,3,4,5,6,7,8])
    list.remove(0);
    expect(list.root.value).toBe(1);
  });

  test('list.remove(value) should remove node from middle of list', () => {
    let list = LinkedList.fromArray([0,1,2,3,4,5,6,7,8])
    list.remove(3);
    expect(list.root.next.next.value).toBe(2);
    expect(list.root.next.next.next.value).toBe(4);
  });

  test('list.remove(value) should remove node from end of list', () => {
    let list = LinkedList.fromArray([0,1,2,3,4,5,6,7,8])
    list.remove(8);
    expect(list.root.next.next.next.next.next.next.next.value).toBe(7);
    expect(list.root.next.next.next.next.next.next.next.next).toBe(null);
  });
});

describe('Convenience methods', () => {
  test('list.getFirst() list.getSecond() and list.getThird() (easy difficulty)', () => {
    let list = LinkedList.fromArray([1,2,3,4]);
    expect(list.getFirst()).toEqual(list.root);
    expect(list.getSecond()).toEqual(list.root.next);
    expect(list.getThird()).toEqual(list.root.next.next);
  });


});

describe('Stretch Goal: create getNthFromLast convenience methods (hard difficulty)', () => {
  test('list.getLast() should return last node', () => {
    let list = LinkedList.fromArray([3, 4, 5, 6]);
    let result = list.getLast();
    expect(result.value).toEqual(6);
  });

  test('list.getNthFromLast() should return nth from last node', () => {
    let list = LinkedList.fromArray([3, 4, 5, 6]);
    let result = list.getNthFromLast(0);
    expect(result.value).toEqual(6);

    result = list.getNthFromLast(1);
    expect(result.value).toEqual(5);

    result = list.getNthFromLast(2)
    expect(result.value).toEqual(4);

    result = list.getNthFromLast(3)
    expect(result.value).toEqual(3);
  });

  test('list.getSecondFromLast() should return second to last node', () => {
    let list = LinkedList.fromArray([3, 4, 5, 6]);
    let result = list.getSecondFromLast();
    expect(result.value).toEqual(5);
  });

  test('list.getThirdFromLast() should return third from last node', () => {
    let list = LinkedList.fromArray([3, 4, 5, 6]);
    let result = list.getThirdFromLast();
    expect(result.value).toEqual(4);
  });
});

describe('Stretch Goal: Common Interview Questions', () => {
  test('list.hasCycle() returns false when there is no loop in the list', () => {
    let list = LinkedList.fromArray([4, 5, 6]);
    expect(list.hasCycle()).toEqual(false);
  });

  test('list.hasCycle() returns false when the list is empty', () => {
    let list = LinkedList.fromArray([]);
    expect(list.hasCycle()).toEqual(false);
  });

  test('list.hasCycle() returns true if there\'s just one node with a loop', () => {
    let list = LinkedList.fromArray([1]);
    list.root.next = list.root;
    expect(list.hasCycle()).toEqual(true);
  });

  test('list.hasCycle() returns true when there is a loop in the list', () => {
    let list1 = LinkedList.fromArray([4, 5, 6]);
    let list2 = LinkedList.fromArray([4, 5, 6]);
    let list3 = LinkedList.fromArray([4, 5, 6]);
    let list4 = LinkedList.fromArray([4, 5, 6]);

    expect(list1.hasCycle()).toEqual(false);

    // five points back to four
    list2.root.next = list2.root;
    expect(list2.hasCycle()).toEqual(true);

    // six points back to four
    list3.root.next.next = list3.root;
    expect(list3.hasCycle()).toEqual(true);

    // six points back to five
    list4.root.next.next = list4.root.next;
    expect(list4.hasCycle()).toEqual(true);
  });

  test('list.getMiddle() should return middle node', () => {
    let list = LinkedList.fromArray([4, 5, 6]);
    let middle = list.getMiddle();
    expect(middle.value).toEqual(5);

    list = LinkedList.fromArray([3, 4, 5, 6]);
    middle = list.getMiddle();
    expect(middle.value).toEqual(5);
  });

  test('list.reverse() should reverse the list', () => {
    let list = LinkedList.fromArray([4, 5, 6]);
    list.reverse();
    expect(list.root.value).toEqual(6);
    expect(list.root.next.value).toEqual(5);
    expect(list.root.next.next.value).toEqual(4);
  });
});

describe('Stretch Goal: Functional Methods', () => {
  test('list.forEach(appender) should append items to a string', () => {
    let result = '';
    let list = LinkedList.fromArray([1,2,3]);
    list.forEach(n => result += n.value + ' ');
    expect(result).toEqual('1 2 3 ');
  });

  test('list.map(doubler) should double a list', () => {
    let list = LinkedList.fromArray([1,2,3]);
    let result = list.map(n => n.value * 2);
    expect(result).toEqual(LinkedList.fromArray([2,4,6]));
  });

  test('list.filter(isEven) should filter out odd numbers', () => {
    let list = LinkedList.fromArray([1,2,3,4]);
    let result = list.filter(n => n.value % 2 === 0);
    expect(result).toEqual(LinkedList.fromArray([2,4]));
  })

  test('list.reduce(adder) should reduce list', () => {
    let list = LinkedList.fromArray([1,2,3]);
    let result = list.reduce((p, n) => p + n.value, 0);
    expect(result).toEqual(6);
  });
});

