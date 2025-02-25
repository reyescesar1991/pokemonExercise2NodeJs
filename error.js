class BaseError extends Error{

    constructor(name, statusCode, isOperational, description){

        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
    }
}

module.exports = BaseError;