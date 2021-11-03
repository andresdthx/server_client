const { listOne, add } = require('./store');
const { validatePassword, generateToken } = require('../../services/user');

const signin = async (userData) => {
    const { username, password } = userData;
    const user = await listOne(username);

    if (!user || !validatePassword(password, user.password))
        throw new Error('Datos incorrectos');

    const signinUser = loginUser(user);
    return signinUser;
}

const loginUser = (user) => {

    const signinUser = {
        username: user.username,
        email: user.email,
        token: generateToken(user)
    }

    return signinUser;
}

const createUser = async (userData) => {
    const { username, enPassword } = userData;
    const user = await listOne(username);

    if(user) throw new Error('username already exists!');

    const userCreated = await add(username, enPassword);
    if(!userCreated) throw new Error('Error create user');
    return userCreated;
}

module.exports = {
    signin,
    createUser
}