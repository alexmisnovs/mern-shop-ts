import express from "express";

const port = 5001;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
