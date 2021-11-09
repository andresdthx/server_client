const { add, list, listOne, update, remove } = require('./store');
const { getFilterAge, getFilterDni } = require('../../services/client');
const { getTypeDni } = require('../typeDni/controller');

const getClients = async (data) => {
    const { age, typeDni, dni } = data;
    var filter = '';

    if (age){
        filter = getFilterAge(age);
    }  else if(typeDni && dni){
        const objtypeDni = await getTypeDni(typeDni);
        filter = getFilterDni(objtypeDni.typeDniId, dni);
    }

    const clients = await list(filter);
    if (!clients) throw new Error('Error getting clients');

    return clients;
}

const getClient = async (DniNumber) => {

    const client = await listOne(DniNumber);
    if (!client) throw new Error('Error getting client');

    return client;
}

const createClient = async (userData) => {

    const { firstname, lastname, dni, age, city, typeDni } = userData;
    const client = await add(firstname, lastname, dni, age, city, typeDni);

    if (!client) throw new Error('Error creating client');

    return client;
}

const updateClient = async (client, data) => {
    const clientUpdated = await update(client, data);
    if(!clientUpdated) throw new Error('Error update client');
    
    return clientUpdated;
}

const deleteClient = async (client) => {
    const clientDeleted = await remove(client);
    if(!clientDeleted) throw new Error('Error delete client');

    return clientDeleted;
}

const readClients = async (clients, getUser) => {

    const obClients = await Promise.all(clients.map(async client => {
        const file = await getUser(client.clientId);
        return unifyClient(client.dataValues, file.data);
    }));

    return obClients;
}

const unifyClient = (client, file) => {
    if(file) client.file = file.image;
    return client;
}

module.exports = {
    getClients,
    getClient,
    createClient,
    updateClient,
    deleteClient,
    readClients
}