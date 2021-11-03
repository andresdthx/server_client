const { success, errors } = require('../network/response');
const { validateEmptyPassowrd, encryptPassword, isAuth } = require('../services/user');

const validatePasswordValue = (req, res, next) => {
    const { password } = req.body;
    if(!validateEmptyPassowrd(password)) {
        errors(req, res, 'Contraseña no valida');
    } else {
        const enPassword = encryptPassword(password);
        req.body.enPassword = enPassword;
        next();
    }
}

const validateAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!isAuth(authorization)){
        errors(req, res, 'Token invalid', 401);
    } else {
        next();
    }
}

module.exports = {
    validatePasswordValue,
    validateAuth
}