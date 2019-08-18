class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  append(element) {
    let node = new Node(element)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  insert(position, element) {
    if (position >= this.length || position < 0) {
      this.append(element)
    } else {
      let current = this.head, node = new Node(element)
      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        let index = 0, previous
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length++
    }
  }

  removeAt(position) {

  }

  remove(element) {

  }

  indexOf(element) {
    let index = -1, current = this.head
    while (current) {
      index++
      if (current.element === element) {
        return index
      }
      current = current.next
    }
    return -1
  }

  isEmpty() {
    return this.length === 0
  }
  
  size() {
    return this.length
  }

  getHead() {}

  toString() {}


}

export default {
  LinkedList
}