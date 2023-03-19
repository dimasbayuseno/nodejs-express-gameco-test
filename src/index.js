require('dotenv').config();

const express = require('express');
const pokemonRoutes = require("./routes/pokemon.js")
const middlewareAuth = require("./middleware/auth")
const ENV_PORT = process.env.PORT || 3000;

const app = express();

app.use(middlewareAuth)

app.use("/pokemon", pokemonRoutes)
app.listen(ENV_PORT, () => {
    console.log("Server up on port ", ENV_PORT);
})