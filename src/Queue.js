class Queue {
  constructor() {
    this._items = [];
  }

  enqueue(...elements) {
    this._items.push(...elements);
  }

  dequeue() {
    return this._items.shift();
  }

  front() {
    return this._items[0];
  }

  isEmpty() {
    return this._items.length === 0;
  }

  size() {
    return this._items.length;
  }
}

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue extends Queue {
  enqueue(element, priority) {
    let queueElement = new QueueElement(element, priority);
    let added = false;
    for (let i = 0; i < this._items.length; i++) {
      if (this._items[i].priority < queueElement.priority) {
        this._items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      this._items.push(queueElement);
    }
  }
}

export default {
  Queue,
  PriorityQueue
}