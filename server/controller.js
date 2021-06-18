const movies = [];
const motiMovies = ['Miracle', 'Forrest Gump', 'Lilo & Stitch', 'Star Wars', 'The Ultimate Gift', 'Seabiscuit'];

module.exports = {
    getAllCompliments: function(req, res) {
        {
            const compliments = ["Gee, you're a smart cookie!",
                               "Cool shirt!",
                               "Your Javascript skills are stellar.",
            ];
            let randomIndex = Math.floor(Math.random() * compliments.length);
            let randomCompliment = compliments[randomIndex];
          
            res.status(200).send(randomCompliment);

    }
},

    getAllFortunes: function(req, res) { {
            const fortunes = ["You are offered the dream of a lifetime. Say yes!", "You have a deep interest in all that is artistic.", 
          "You will be successful in your work.", "Your ability to juggle many tasks will take you far.", "Your goal will be reached very soon.",
          "Your hard work will payoff today."];
          
          let rdmIdx = Math.floor(Math.random() * fortunes.length);
          let rdmFortune = fortunes[rdmIdx];
          
          res.status(200).send(rdmFortune);
    }
    },

    addInspMovie: function(req, res) {
    
        const { title, genre, imageUrl } = req.body;

        const inspMovie = {
           title, genre, imageUrl
        };
        
        movies.push(inspMovie);
        res.status(200).send(movies);
    },

    getMotiMovie: function(req, res) {
    
    }






};
