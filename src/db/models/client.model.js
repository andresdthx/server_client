
module.exports = (sequelize, type) => {
    return sequelize.define('clients', {
        clientId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstname: {
            type: type.STRING(30),
            allowNull: false
        },
        lastname: {
            type: type.STRING(30),
            allowNull: false
        },
        dni: {
            type: type.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isInt: {
                    msg: 'El documento debe ser un valor numérico'
                }
            }

        },
        age: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    msg: 'La edad debe ser un valor numérico'
                }
            }
        }
    });
}
