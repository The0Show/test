import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/StayInsideMe.mp3`);
});

app.listen(3000, () => {
	console.log("we're live");
});
