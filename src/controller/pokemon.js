const axios = require('axios');

const response = require("../const/const")

const getAllPokemon = async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        res.json(response.data.results);
    } catch (error) {
        console.error(error);
        res.status(response.internalServerError).send(response.fetchError);
    }

}

module.exports = {
    getAllPokemon
}