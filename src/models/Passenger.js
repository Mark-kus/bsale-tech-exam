module.exports = (sequelize, DataTypes) => {
    sequelize.define("passenger", {
        passenger_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        dni: {
            type: DataTypes.CHAR,
        },
        name: {
            type: DataTypes.CHAR,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        country: {
            type: DataTypes.CHAR,
        }
    }, {
        timestamps: false,
        freezeTableName: true
    })
}