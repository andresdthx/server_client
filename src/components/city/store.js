const { City } = require('../../db/connection');
const { Op } = require('sequelize');

const getCity = async (name) => {
    const city = await City.findOne({
        where: { name: name }
    });

    return city;
}

const createCity = async (name) => {
    const city = await City.create({
        name: name
    });

    return city;
}

module.exports = {
    listOne: getCity,
    add: createCity
}