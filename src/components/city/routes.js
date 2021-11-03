const express = require('express');
const router = express.Router();

const { success, errors } = require('../../network/response');
const { getClients } = require('./controller');

router.get('/', async (req, res) => {
    try {
        const clients = await getClients();
        success(req, res, clients);
    } catch (error) {
        errors(req, res, error);
    }
})

router.post('/', async (req, res) => {

    try {
        const client = await createClient(req.body);
        success(req, res, client);
    } catch (error) {
        errors(req, res, error.message, 500, error);
    }
});


module.exports = router;