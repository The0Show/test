import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/StayInsideMe.mp3`);
});

app.get("*", (req, res) => {
	res.send("uhm i don't think you get that this is a test >:(");
});

app.listen(3000, () => {
	console.log("we're live");
});
