const express = require('express');
const { validatePasswordValue } = require('../../middlewares/user.middleware');
const { success, errors } = require('../../network/response');
const { signin, createUser } = require('./controller');
const router = express.Router();

router.post('/signin', async(req, res) => {
    try {
        const login = await signin(req.body);
        success(req, res, login);
    } catch (error) {
        errors(req, res, error.message, 500, error);   
    }
});

router.post('/', [validatePasswordValue], async(req, res) => {
    try {
        const user = await createUser(req.body);
        const message = `user ${user.username} created`;
        success(req, res, message);
    } catch (error) {
        errors(req, res, error.message, 500, error);
    }
});

module.exports = router;
