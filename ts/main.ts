import express, { Application, Request, Response } from "express";
import ejs from "ejs";
import { Palindrome } from "./palindrome.js";
import bodyParser from "body-parser";

const app:Application = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const PORT:number = 5000;

interface indexEJS {

    palindromeOrNot:string
}

let display:indexEJS = {

    palindromeOrNot: ""
} 

app.get("/", (req:Request, res:Response) => {


    res.render("index.ejs",{

        palindromeOrNot: display.palindromeOrNot
    });
})

app.post("/", (req:Request, res:Response) => {

    let word:Palindrome = new Palindrome(req.body.word)

    display.palindromeOrNot = word.identify();

    res.redirect("/");
})

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
    
})