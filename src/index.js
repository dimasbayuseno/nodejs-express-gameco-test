const express = require('express');
const pokemonRoutes = require("./routes/pokemon.js")
const middlewareAuth = require("./middleware/auth")

const app = express();

app.use(middlewareAuth)

app.use("/pokemon", pokemonRoutes)

app.listen(3000, () => {
    console.log("Server up on port 3000");
})