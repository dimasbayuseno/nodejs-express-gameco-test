require('dotenv').config();

const axios = require('axios');
const response = require("../const/const")
const ENV_POKEAPI = process.env.URL_POKEAPI;

const getAllPokemon = async (req, res) => {
    page = parseInt(req.query.page) || response.defaultPage
    per_page = parseInt(req.query.per_page) || response.defaultLimit
    url = ENV_POKEAPI
    sort = req.query.sort_by || response.defaultSort

    url += `/${sort}`


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