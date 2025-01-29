const NotFoundError = require('./notFoundError');

const validateNamePokemon = (req, res, next) => {

    console.log("middleware", req.body);

    const {name} = req.body;

    if(!name) return next(new NotFoundError("Name is required"));

    req.pokemonName = name;
    next();
}


module.exports = validateNamePokemon;