const errorHandler = (err, req, res, next) => {
    console.error(err);

    res.status(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode || 500,
        message: err.message || 'Internal Server Error'
    });
};

module.exports = errorHandler;