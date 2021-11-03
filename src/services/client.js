const { Op } = require("sequelize");

const isEmpty = (data = '') => {
    let empty = false;
    if(!data || data == '') empty = true;
    return empty;
}

const isNumber = (data) => {
    let value = false;
    if (Number.isInteger(data)) value = true;
    return value;
}

const getFilterAge = (age) => {
    const filter = { age: {  [Op.gte]: age } };
    return filter;
}

const getFilterDni = (typeDni, dni) => {
    const filter = { [Op.and]: [{ typesDniTypeDniId: typeDni }, { dni: dni }] };
    return filter;
}

module.exports = {
    isNumber,
    isEmpty,
    getFilterAge,
    getFilterDni
}