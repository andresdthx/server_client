const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')

const { validateCity } = require('../city/controller');
const { validateTypeDni } = require('../typeDni/controller');
const { getClients, createClient, getClient, updateClient, deleteClient, readClients } = require('./controller');

const { validateDniValue, validateAgeValue } = require('../../middlewares/client.middleware');
const { validateAuth } = require('../../middlewares/user.middleware');

const { success } = require('../../network/response');
const { saveUser, getUser, deleteUser, updateUser } = require('../../microservices/serviceFile');

router.get('/', asyncHandler(async(req, res) => {
    const clients = await getClients(req.params);
    const objClients = await readClients(clients, getUser);
    success(req, res, objClients);
}));

router.post('/', [ validateDniValue, validateAgeValue, validateAuth ], asyncHandler(async(req, res) => {
    const { city, typeDni, file } = req.body;
    const objCity = await validateCity(city);
    const objTypeDni = await validateTypeDni(typeDni);

    const client = await createClient({ ...req.body, city: objCity, typeDni: objTypeDni });
    await saveUser(client.clientId, file);
    success(req, res, client);
}));

router.put('/', [ validateDniValue, validateAgeValue, validateAuth ], asyncHandler(async (req, res) => {

    const { city, typeDni, dni, file } = req.body;
    const objCity = await validateCity(city);
    const objCypeDni = await validateTypeDni(typeDni);

    const client = await getClient(dni);
    const clientUpdated = await updateClient(client, { ...req.body, city: objCity, typeDni: objCypeDni });
    await updateUser(clientUpdated.clientId, file);

    const message = `Client ${clientUpdated.firstname} ${clientUpdated.lastname} updated`;
    success(req, res, message);

}));

router.delete('/', [ validateDniValue, validateAuth ], asyncHandler(async(req, res) => {
    const client = await getClient(req.body.dni);

    const clientDeleted = await deleteClient(client);
    await deleteUser(client.clientId);

    const message = `Client ${clientDeleted.firstname} ${clientDeleted.lastname} deleted`;
    success(req, res, message);
}));


module.exports = router;