module.exports = (sequelize, DataTypes) => {
    sequelize.define('purchase', {
        purchase_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        purchase_date: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
        freezeTableName: true
    })
}