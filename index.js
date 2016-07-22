'use strict';

const Node = require('homework-node');
const debug = require('debug');

const debugLog = debug('homework-queue');

function Queue() {

    const singleList = new Node();

    this.enqueue = (value) => {
        debugLog.log(`Enqueue value: ${value}`);
        singleList.addNext(value);
    };

    this.isEmpty = () => {
        return (singleList.head === null);
    };

    this.peek = () => {
        if (singleList.head === null) {
            throw new Error('Queue is empty');
        } else {
            return singleList.head.value;
        }
    };

    this.dequeue = () => {
        if (singleList.head === null) {
            throw new Error('Queue is empty');
        } else {

            let elem = singleList.head.value;
            singleList.head = singleList.head.next;

            return elem;

        }
    };

}

module.exports = Queue;
