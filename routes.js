const express = require('express');
const validateNamePokemon = require('./validationMiddleware');
const { default: axios } = require('axios');
const router = express.Router();
const TimeOutError = require('./timeOutError');
const NotFoundError = require('./notFoundError');

router.post('/name', validateNamePokemon, async (req, res, next) => {

    const {pokemonName} = req;

    console.log("routes" , pokemonName);
    

    try {
        console.log(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
            timeout: 3000
        })
        const pokemonData = response.data;
        res.json(pokemonData);
    } catch (error) {
        
        if (error.code === 'ECONNABORTED') {
            return next(new TimeOutError("Request Timed Out"));
        }
        if (error.response && error.response.status === 404) {
            return next(new NotFoundError("Pokemon not found"));
        }
        next(error);
    }
})

module.exports = router;