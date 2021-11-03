const { TypeDni } = require('../../db/connection');

const getTypeDni = async (typeDni) => {
    const getTypeDni = await TypeDni.findOne({
        where: {
            typeDni: typeDni
        }
    });

    return getTypeDni;
}

const createTypedni = async (typeDni) => {
    const typeDniCreated = await TypeDni.create({
        typeDni: typeDni
    });

    return typeDniCreated;
}

module.exports = {
    listOne: getTypeDni,
    add: createTypedni
}