const BaseError = require('./error');

class NotFoundError extends BaseError{

    constructor(description = "Pokemon Not Found"){
        super('Not Found Error', 404, true, description);
    }
}


module.exports = NotFoundError;