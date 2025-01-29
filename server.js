const express = require('express');
const app = express();
const port = 3000;
const TimeOutError = require('./timeOutError');
const pokemonRoutes = require('./routes');
const errorHandler = require('./errorHandler');


app.use(express.json());
app.use('/pokemon', pokemonRoutes);
app.use(errorHandler);

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
