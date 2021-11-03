
module.exports = (sequelize, type) => {
    return sequelize.define('cities', {
        cityId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: type.STRING(50),
            allowNull: false,
            unique: true
        }
    },
    {
        timestamps: false,
    });
}
