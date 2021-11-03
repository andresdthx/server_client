const errors = (req, res, message, status = 400, details) => {
    res.status(status).send({
        response: message
    });
}

const success = (req, res, message, status = 200) => {
    res.status(status).send({
        response: message
    });
}

module.exports = {
    success,
    errors
}