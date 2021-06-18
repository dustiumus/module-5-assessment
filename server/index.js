const express = require("express");
const cors = require("cors");
const ctrl = require('./controller');

const app = express();

const { getAllCompliments, getAllFortunes, addInspMovie } = ctrl;

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/compliment", getAllCompliments );
app.get("/api/fortune", getAllFortunes);
app.post("/api/movies", addInspMovie);


app.listen(4000, () => console.log("Server running on 4000"));
