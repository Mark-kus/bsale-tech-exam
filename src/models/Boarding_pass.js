module.exports = (sequelize, DataTypes) => {
    sequelize.define('boarding_pass', {
        boarding_pass_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        purchase_id: {
            type: DataTypes.INTEGER
        },
        passenger_id: {
            type: DataTypes.INTEGER
        },
        seat_type_id: {
            type: DataTypes.INTEGER
        },
        seat_id: {
            type: DataTypes.INTEGER
        },
        flight_id: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    }
    )
}