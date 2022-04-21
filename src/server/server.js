const express = require('express')
const axios = require('axios')

var app = express();

var baseUrl = process.env.BGG_JSON_API || "https://bgg-json.azurewebsites.net";

app.get("/bgg/games/hot", (req, res) => {
    
    const url = baseUrl + "/hot";
    
    axios.get(url)
        .then(response => res.json(response.data))
        .catch(err => next(err));
});

var port = process.env.PORT || 3000;
  
app.listen(port);

console.log('Board Game Nerd server started on: ' + port);
console.log('Board Game Nerd calling: ' + baseUrl);