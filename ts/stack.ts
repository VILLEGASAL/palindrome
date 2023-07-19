
export class Stack{

    private stack:any[] = [];

    
    public isEmpty():boolean {

        if (this.stack.length === 0) {
            
            return true;

        }else{

            return false;
        }  
    }

    public push(word:string):void{

        this.stack.unshift(word)
    }

    public pop():any{

        return this.stack.shift();
    }

    public getStack():any{

        return this.stack;
    }
}