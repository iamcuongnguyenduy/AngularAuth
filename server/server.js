const express = require("express");
const bodyParse = require("body-parser");

const PORT = 3000;
const app = express();
const api = require("./routes/api");

app.use(bodyParse.json());

app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.listen(PORT, () => {
  console.log("Listening on server at port: " + PORT);
});

app.use("/api", api);
