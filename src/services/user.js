const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const encryptPassword = (password) => {
    const encrypt = bcrypt.hashSync(password, 4);
    return encrypt;
}

const generateToken = (user) => {
    return jwt.sign(
        {
            username: user.username,
            email: user.name,
        },
        process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: '30d',
        }
    );
}

const validatePassword = (bodyPassword, userPassword) => {
    let value = false;
    if (bcrypt.compareSync(bodyPassword, userPassword)) 
        value = true;

    return value;
}

const validateEmptyPassowrd = (password) => {
    let value = false;
    if(!password || password === '') value = true;
    return value;
}

const isAuth = (authorization) => {

    var auth = false;
    if(authorization){
        const token = authorization.slice(7, authorization.length); //Bearer XXXXX
        jwt.verify(token, process.env.JWT_SECRET || 'somethingsecret', (err, decode) =>{
            if(!err){
                auth = true;
            }
        });
    }

    return auth;
}

module.exports = {
    encryptPassword,
    generateToken,
    validatePassword,
    validateEmptyPassowrd,
    isAuth
}