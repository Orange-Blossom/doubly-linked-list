const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = new Node(null, null, this._tail);
        this._tail = new Node(null, this._head, null);
        this.length = 0;
    }

    append(data) {
        var insertElement = new Node(data, this._tail.prev, this._tail);
        this._tail.prev.next = insertElement;
        this._tail.prev = insertElement;
        this.length++;
        return this;
    }

    head() {
        return this._head.next.data;
    }

    tail() {
        return this._tail.prev.data;
    }

    at(index) {
        if (index > this.length) {
            return null;
        }
        var current = this._head.next;
        for (var i=0; i<index; i++) {
            current = current.next;
        }
        return current.data;
    }

    insertAt(index, data) {
        if (index > this.length) {
            return;
        }
        var current = this._head.next;
        for (var i=0; i< index; i++) {
            current = current.next;
        }
        var insertElement = new Node(data, current.prev, current);
        current.prev.next = insertElement;
        current.prev = insertElement;
        this.length++;
        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        if (this.length == 0) {
            return this;
        }
        this._head.next.prev = null;
        this._tail.prev.next = null;
        this._head.next = this._tail;
        this._tail.prev = this._head;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (index > this.length) {
            return;
        }
        var current = this._head.next;
        for (var i=0; i<index; i++) {
            current = current.next;
        }
        current.next.prev = current.prev;
        current.prev.next = current.next;
        current.next = null;
        current.prev = null;
        this.length--;
        return this;
    }

    reverse() {
        var reversedList = new LinkedList();
        var current = this._tail.prev;
        while (current != this._head) {
            reversedList.append(current.data);
            current = current.prev;
        }
        this.clear();
        current = reversedList._head.next;
        for (var i=0; i<reversedList.length; i++) {
            this.append(current.data);
            current = current.next;
        }
        return this;
    }

    indexOf(data) {
        var current = this._head.next;
        var indexOfElement = 0;
        while (indexOfElement < this.length) {
            if (current.data == data) {
                return indexOfElement;
            }
            current = current.next;
            indexOfElement++;
        }
        return -1;
    }
}

module.exports = LinkedList;
