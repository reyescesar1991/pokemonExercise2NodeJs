const BaseError = require("./error");

class TimeOutError extends BaseError{

    constructor(description = "Request Time Out"){
        super('Time Out Error', 408, true, description)
    }
}

module.exports = TimeOutError;