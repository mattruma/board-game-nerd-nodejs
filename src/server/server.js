const express = require('express')
const axios = require('axios')

var app = express()

app.get("/bgg/games/hot", (req, res) => {
    const url = "https://bgg-json.azurewebsites.net/hot";
    
    axios.get(url)
        .then(response => res.json(response.data))
        .catch(err => next(err));
});

var port = process.env.PORT || 3000;
  
app.listen(port);

console.log('Board Game Nerd server started on: ' + port);