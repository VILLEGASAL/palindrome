export class Stack {
    stack = [];
    isEmpty() {
        if (this.stack.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    push(word) {
        this.stack.unshift(word);
    }
    pop() {
        return this.stack.shift();
    }
    getStack() {
        return this.stack;
    }
}
