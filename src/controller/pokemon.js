const axios = require('axios');

const response = require("../const/const")

const getAllPokemon = async (req, res) => {
    page = parseInt(req.query.page) || response.defaultPage
    per_page = parseInt(req.query.per_page) || response.defaultLimit
    url = 'https://pokeapi.co/api/v2'

    if (req.query.sort_by) {
        url += `/${req.query.sort_by}` || "pokemon"
    }

    if (req.query.search_by) {
        url += `/${req.query.search_by}`
    }

    url += `?limit=${per_page}&offset=${page}`

    try {
        const response = await axios.get(url);
        console.log(response.data);
        res.json(response.data);
  
    } catch (error) {
        console.error(error);
        res.status(response.internalServerError).send(response.fetchError);
    }

}

module.exports = {
    getAllPokemon
}