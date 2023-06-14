module.exports = (sequelize, DataTypes) => {
    sequelize.define('seat', {
        seat_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        seat_column: {
            type: DataTypes.CHAR(2)
        },
        seat_row: {
            type: DataTypes.INTEGER
        },
        seat_type_id: {
            type: DataTypes.INTEGER
        },
        airplane_id: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
        freezeTableName: true
    })
}