const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment",(req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.",];

        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        
        res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
    const fortunes = ["You are offered the dream of a lifetime. Say yes!", "You have a deep interest in all that is artistic.", "You will be successful in your work.", "Your ability to juggle many tasks will take you far.", "Your goal will be reached very soon.","Your hard work will payoff today."];
  
        let rdmIdx = Math.floor(Math.random() * fortunes.length);
        let rdmFortune = fortunes[rdmIdx];
  
  res.status(200).send(rdmFortune);
});

const movies = ['Star Wars', 'Avatar', 'Blindside', 'Miracle', 'Glory Road'];


app.get('/api/movies', function(req, res) {
    res.status(200).send(movies);
});

app.post('/api/movies', function(req, res){
    const { movieTitle } = req.body;

        movies.push(movieTitle);
        res.status(200).send('movies')
    
    movies.push(req.body);
    res.status(200).send(movies);

});
app.listen(4000, () => console.log("Server running on 4000"));
