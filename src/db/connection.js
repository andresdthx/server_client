const { Sequelize } = require('sequelize');

const ClientModel = require('./models/client.model');
const CityModel = require('./models/city.model');
const TypeDniModel = require('./models/typeDni.model');
const UserModel = require('./models/user.model');

const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
});

const Client = ClientModel(sequelize, Sequelize);
const City = CityModel(sequelize, Sequelize);
const TypeDni = TypeDniModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

Client.belongsTo(City);
Client.belongsTo(TypeDni);

sequelize.sync({ force: false, logging: false }).then(() => {
    console.log("Database connected!!")
});


module.exports = { sequelize, Client, City, TypeDni, User };