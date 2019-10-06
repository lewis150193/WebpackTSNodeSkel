import express from "express";
import { nunjucksSetup } from "./nunjucks";

const app = express();
nunjucksSetup(app);
const  numArr = [1, 2 , 3 , 4 , 5 , 6]

app.get("/", (req: express.Request, res: express.Response) => {
    res.render("HomePage.njk", {Hello: "Lewis"});
});

app.get("/people", (req: express.Request, res: express.Response) => {
    res.json({Numbers: numArr});

});


app.listen(8080, () => {
        console.log("You have connected on port 8080");

});
