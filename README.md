[![Build Status](https://travis-ci.org/k03mad/homework-queue.svg?branch=master)](https://travis-ci.org/k03mad/homework-queue)

### Simple implementation of Queue.

A queue is a first-in-first-out (FIFO) data structure - items are added to the end of the queue and removed from the front.

NPM link: https://www.npmjs.com/package/homework-queue

### Install & use:

```node
$ npm install homework-queue
```

```js
const Queue = require('homework-queue');
const myQueue = new Queue();

// add element to queue
myQueue.enqueue(value)
// check queue for emptiness
myQueue.isEmpty()
// return first element of queue
myQueue.peek()
// return first element and delete it from queue
myQueue.dequeue()
```
