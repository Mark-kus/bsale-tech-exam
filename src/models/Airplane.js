module.exports = (sequelize, DataTypes) => {
    sequelize.define('airplane', {
        airplane_id: {
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