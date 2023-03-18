const axios = require('axios');

const response = require("../const/const")

const getAllPokemon = async (req, res) => {
    page = parseInt(req.query.page) || response.defaultPage
    per_page = parseInt(req.query.per_page) || response.defaultLimit
    url = 'https://pokeapi.co/api/v2/pokemon'

    if (req.query.name) {
        url += `/${req.query.name}`
    }

    url += `?limit=${per_page}&offset=${page}`

    try {
        const response = await axios.get(url);
        res.json(response.data);
  
    } catch (error) {
        console.error(error);
        res.status(response.internalServerError).send(response.fetchError);
    }

}

module.exports = {
    getAllPokemon
}