const { Flight, Boarding_pass, Passenger } = require('./db')

module.exports = fetchFlightData = async (id) => {
    return await Flight.findByPk(id, {
        include: {
            model: Boarding_pass,
            include: [Passenger]
        }
    })
}