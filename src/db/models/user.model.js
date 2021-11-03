
module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        userId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: type.STRING(30),
            allowNull: false
        },
        password: {
            type: type.STRING(80),
            allowNull: false
        }
    },
    {
        timestamps: false,
    });
}
