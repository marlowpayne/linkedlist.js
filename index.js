/* linkedlist.js
 * a singly-linked list implementation in JS without using arrays
 */

class LinkedListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(...initialVals) {
    this.root = null

    this.add = this.add.bind(this)
    this.has = this.has.bind(this)

    if (initialVals.length) {
      initialVals.forEach(val => this.add(val))
    }
  }

  // add a new node with some data to the list
  add(data) {
    // FIXME: data validation? #YOLO
    let n = this.root
    if (n === null) {
      // empty list, initialize with first node
      this.root = new LinkedListNode(data)
      return
    }
    // find tail
    while (n.next !== null) {
      n = n.next
    }
    // add to tail
    n.next = new LinkedListNode(data)
    return
  }

  // return a boolean indicating whether some data exists in a node on the list
  has(data) {
    // FIXME: data validation? #YOLO
    let n = this.root
    if (n === null) {
      // empty list
      return false
    }
    // check each node's data
    while (n !== null) {
      if (n.data === data) {
        return true
      }
      n = n.next
    }
    return false
  }
}

// tests
(() => {
  const list = new LinkedList(1, 2, 3)
  console.log(list.has(1)) // true
  console.log(list.has(2)) // true
  console.log(list.has(3)) // true

  list.add(4)
  list.add(5)

  console.log(list.has(5)) // true
  console.log(list.has(4)) // true
  console.log(list.has(6)) // false

  const list2 = new LinkedList
  list2.add('a string')
  const aFunction = str => { console.log(str) }
  list2.add(aFunction)
  const anObject = {}
  list2.add(anObject)

  console.log(list2.has('a string')) // true
  console.log(list2.has(aFunction)) // true
  console.log(list2.has(anObject)) // true
})()
