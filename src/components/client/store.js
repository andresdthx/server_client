const { Client, City, TypeDni } = require('../../db/connection');

const getClients = async (where) => {
    const clients = await Client.findAll({
        attributes: ['clientId', 'firstname', 'lastname', 'dni', 'age'],
        include:[
            {
                model: City,
                attributes: ['name']
            },
            {
                model: TypeDni,
                attributes: ['typeDni']
            }
        ],
        where: where
    });
    
    return clients;
}

const getClient = async (dni) => {
    const client = await Client.findOne({
        where:{
            dni: dni
        }
    });
    
    return client;
}

const createClient = async (firstname, lastname, dni, age, cityCityId, typesDniTypeDniId) => {

    const client = await Client.create({
        firstname : firstname,
        lastname : lastname,
        dni : dni,
        age : age,
        cityCityId : cityCityId,
        typesDniTypeDniId : typesDniTypeDniId
    });

    return client;
}

const updateClient = async (client, data) => {
    client.firstname = data.firstname;
    client.lastname = data.lastname;
    client.dni = data.dni;
    client.age = data.age;
    client.cityCityId = data.city;
    client.typesDniTypeDniId = data.typeDni;

    const clientUpdated = await client.save();

    return clientUpdated;
}

const deleteClient = async (client) => {
    const deleted = await client.destroy();
    return deleted;
}

module.exports = {
    list: getClients,
    listOne: getClient,
    add: createClient,
    update: updateClient,
    remove: deleteClient
}