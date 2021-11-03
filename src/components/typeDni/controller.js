
const { listOne, add } = require('./store');

const validateTypeDni = async (name) => {
    const typeDni = await listOne(name);
    var typeDniId = null;

    if (typeDni) {
        typeDniId = typeDni.typeDniId;
    } else {
        const typeDniCreated = await add(name);
        typeDniId = typeDniCreated.typeDniId;
    }

    return typeDniId;
}

const getTypeDni = async (name) => {
    const typeDni = await listOne(name);
    if(!typeDni) throw new Error('Error get Type Dni');
    return typeDni;
}

module.exports = {
    validateTypeDni,
    getTypeDni
}