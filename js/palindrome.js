import { Stack } from "./stack.js";
export class Palindrome {
    word = new Stack();
    newWord = "";
    wordFromUser;
    constructor(word) {
        for (let i = 0; i < word.length; i++) {
            this.word.push(word[i]);
        }
        while (!this.word.isEmpty()) {
            this.newWord += this.word.pop();
        }
        this.wordFromUser = word;
    }
    identify() {
        if (this.wordFromUser.toLowerCase() === this.newWord.toLowerCase()) {
            return `${this.wordFromUser} is a palindrome.`;
        }
        else {
            return `${this.wordFromUser} is not a palindrome.`;
        }
    }
}
