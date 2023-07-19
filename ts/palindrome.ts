import { Stack } from "./stack.js";

export class Palindrome{

    word:Stack = new Stack()

    newWord:string = "";

    wordFromUser:string;

    constructor(word:string){

        for(let i = 0; i < word.length; i++){

            this.word.push(word[i]);
        }

        while(!this.word.isEmpty()){

            this.newWord += this.word.pop();
        }

        this.wordFromUser = word;
    }

    public identify():string{

        if(this.wordFromUser.toLowerCase() === this.newWord.toLowerCase()){

            return `${this.wordFromUser} is a palindrome.`;
        
        }else{

            return `${this.wordFromUser} is not a palindrome.`;
        }
    }
}