/**
 * Sets a seat from 0 to 1 in an airplane grid
 * @param {object} airplaneSeats - The airplane grid to mutate.
 * @param {number} seatColumn - The column of the seat to set.
 * @param {number} seatRow - The row of the seat to set.
 * @param {number} seatType - The type of the seat to set (1 === frist class).
 * @param {number} side - The side of the airplane where the seat will be (1 === port).
*/
module.exports = addSeat = (airplaneSeats, seatColumn, seatRow, seatType, side) => {

    // Defines a variable with the name of the seat class
    const seatClass = seatType === 1 ? 'firstClass'
        : seatType === 2 ? 'premiumClass' : 'economicClass'

    // Defines a variables with the name of the airplane side
    const airplaneSide = side === 1 ? 'port'
        : side === 2 ? 'creak' : 'starboard'

    airplaneSeats[airplaneSide][seatClass][seatColumn - 1][seatRow - 1] = 1
    return true

}