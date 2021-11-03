const { User } = require('../../db/connection');

const getUser = async (username) => {
    const user = await User.findOne({
        where: { username: username }
    });
    return user;
}

const createUser = async (username, password) => {
    const user = await User.create({
        username: username,
        password: password
    });

    return user;
}

module.exports = {
    listOne: getUser,
    add: createUser
}