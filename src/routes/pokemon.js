const express = require('express')
const pokemonController = require("../controller/pokemon.js")

const router = express.Router();

router.get("/", pokemonController.getAllPokemon)

module.exports = router;