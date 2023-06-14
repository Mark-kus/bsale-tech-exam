module.exports = (sequelize, DataTypes) => {
    sequelize.define('seat_type', {
        seat_type_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.CHAR
        }
    }, {
        timestamps: false,
        freezeTableName: true
    })
}