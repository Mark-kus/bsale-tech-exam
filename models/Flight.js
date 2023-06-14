module.exports = (sequelize, DataTypes) => {
    sequelize.define('flight', {
        flight_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        takeoff_date_time: {
            type: DataTypes.INTEGER
        },
        takeoff_airport: {
            type: DataTypes.CHAR
        },
        landing_date_time: {
            type: DataTypes.INTEGER
        },
        landing_airport: {
            type: DataTypes.CHAR
        },
        airplane_id: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    }
    )
}