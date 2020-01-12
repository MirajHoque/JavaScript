class Queue {
    constructor() {
        this.queue = [];
    }

    //queue empty or not

    isEmpty() {
        return this.queue.length == 0;
    }

    //add elements to queue
    enqueue(elements) {
        this.queue.push(elements)
        console.log(`${elements} added to queue`);
    }

    //remove elements from the queue
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        else {
            let elements = this.queue.shift()
            console.log(`${elements} removed from the queue`)
        }
    }

    //size of the queue
    printSize() {
        console.log(`Queue size: ${this.queue.length}`);
    }

    front() {
        if (this.isEmpty())
            return "No elements remains"

        return this.queue[0];

    }

    //display queue content
    printQueue() {
        let contents = this.queue.join(",");
        console.log(`Queue: [${contents}]`);
    }
}

//execution

const queue = new Queue();

queue.printSize();
console.log(queue.isEmpty());

queue.enqueue("sam");
queue.enqueue("bob");
queue.enqueue("Zafrin");
queue.enqueue("Miraj");
queue.printSize();

queue.dequeue();
queue.dequeue();
queue.printSize();


queue.printQueue();