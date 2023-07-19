import express from "express";
import { Palindrome } from "./palindrome.js";
import bodyParser from "body-parser";
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 5000;
let display = {
    palindromeOrNot: ""
};
app.get("/", (req, res) => {
    res.render("index.ejs", {
        palindromeOrNot: display.palindromeOrNot
    });
});
app.post("/", (req, res) => {
    let word = new Palindrome(req.body.word);
    display.palindromeOrNot = word.identify();
    res.redirect("/");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
