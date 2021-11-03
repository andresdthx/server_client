const { errors } = require('../network/response');

const { isNumber, isEmpty } = require('../services/client');

const validateDniValue = (req, res, next) => {
    const { dni } = req.body;

    if (!isNumber(dni)){
        errors(req, res, 'El número de documento debe ser númerico');
    } else {
        next();
    }
}

const validateAgeValue = (req, res, next) => {
    const { age } = req.body;

    if (!isNumber(age)) {
        errors(req, res, 'La edad debe ser de tipo númerico');
    } else {
        next();
    }
}

module.exports = {
    validateDniValue,
    validateAgeValue
}