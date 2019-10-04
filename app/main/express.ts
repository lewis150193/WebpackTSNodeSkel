import express from "express";

const app = express();

const  numArr = [1, 2 , 3 , 4 , 5 , 6]

app.get("/", (req: any, res: any) => {
    res.json({Hello: "Hello From this joint."});
});

app.get("/people", (req: any, res: any) => {
    res.json({Numbers: numArr});

});

app.listen(8080, () => {
        console.log("You have connected on port 8080");

});
