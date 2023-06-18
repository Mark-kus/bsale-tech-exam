module.exports = cleanResponse = (flight, passengers) => {

    passengers.sort((a, b) => a.seatId - b.seatId);

    return {
        code: 200,
        data: {
            flightId: flight.flight_id,
            takeoffDateTime: flight.takeoff_date_time,
            takeoffAirport: flight.takeoff_airport,
            landingDateTime: flight.landing_date_time,
            landingAirport: flight.landing_airport,
            airplaneId: flight.airplane_id,
            passengers: [...passengers]
        }
    }
}