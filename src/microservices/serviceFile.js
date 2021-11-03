const axios = require('axios');
const URL = 'http://localhost:8080/api/users';

const getUser = async (userId) => {
    return await axios.get(`${URL}/${userId}`);
}

const saveUser = async (userId, file) => {
    return await axios.post(URL, {
        userId: userId,
        file: file
    });
}

const updateUser = async (userId, file) => {
    return await axios.patch(URL, {
        userId: userId,
        file: file
    });
}

const deleteUser = async (userId) => {
    return await axios.delete(`${URL}/${userId}`);
}

module.exports = {
    getUser,
    saveUser,
    updateUser,
    deleteUser
}