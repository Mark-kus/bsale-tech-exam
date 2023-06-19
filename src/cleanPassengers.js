const addSeat = require("./addSeat")
const createAirplaneGrid = require("./createAirplaneGrid")
const stackPassengersBySeat = require("./stackPassengersBySeat")

module.exports = cleanPassengers = ({ boarding_passes, airplane }) => {

    const airplaneSeats = createAirplaneGrid(airplane.name)

    const { passengersReady, unseatedPassengers } = stackPassengersBySeat(boarding_passes)

    if (unseatedPassengers.length) {
        unseatedPassengers.forEach(passengersStack => {
            passengersStack.map(passenger => {
                passengersReady.push(passenger)
            })
        })
    }

    return passengersReady
}