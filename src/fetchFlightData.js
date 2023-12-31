const { conn, Flight, Boarding_pass, Passenger, Seat, Seat_type, Airplane } = require('./db')

module.exports = fetchFlightData = async (id) => {
    let flight = null

    // Conect to db
    await conn.authenticate()
        .then(async () => {
            // if it can connect, fetch flight data
            flight = await Flight.findByPk(id, {
                include: {
                    model: Boarding_pass,
                    include: [Passenger, Seat, Seat_type]
                }
            })
            
            flight.airplane = await Airplane.findByPk(flight.airplane_id)
        })
        .catch(() => {
            // If it can't connect, send error
            return { code: 400, errors: "could not connect to db" }
        })

    return flight
}