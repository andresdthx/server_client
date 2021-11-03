
module.exports = (sequelize, type) => {
    return sequelize.define('typesDni', {
        typeDniId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        typeDni: {
            type: type.STRING(30),
            allowNull: false
        }
    },
    {
        timestamps: false,
    });
}
