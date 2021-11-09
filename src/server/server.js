const express = require('express');
const app = express();
const cors = require('cors');

const clientRouter = require('../components/client/routes');
const userRouter = require('../components/user/routes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

var corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use('/api/clients', clientRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido al módulo de clientes' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


module.exports = { app, server };