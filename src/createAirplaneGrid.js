module.exports = (airplane) => {
    // Port and Starboard side of the airplanes are declared, and filled with number zero's (empty seat)
    // Each array is a column, and each number in it, is a row, such is it that airplane.port[0][0] is A1 seat
    // and airplane.starboard[0][1] is F2 seat, in the AirNova-660

    const airplaneSeats = {
        port: { firstClass: [], premiumClass: [], economicClass: [] },
        creak: { firstClass: [], premiumClass: [], economicClass: [] },
        starboard: { firstClass: [], premiumClass: [], economicClass: [] },
    }

    let economicColumns, premiumColumns, firstColumns,
        economicRows, premiumRows, firstRows,
        creakEconomicRows, creakPremiumRows, creakFirstRows

    // Segun el avion, ubicamos los asientos vacios
    switch (airplane) {
        case 'AirNova-660':

            economicColumns = 16
            premiumColumns = 8
            firstColumns = 4

            economicRows = premiumRows = 3
            firstRows = 2


            for (let i = 0; i < economicColumns; i++) {
                airplaneSeats.port.economicClass.push([])
                airplaneSeats.starboard.economicClass.push([])

                for (let j = 0; j < economicRows; j++) {
                    airplaneSeats.port.economicClass[i].push(0)
                    airplaneSeats.starboard.economicClass[i].push(0)
                }
            }

            for (let i = 0; i < premiumColumns; i++) {
                airplaneSeats.port.premiumClass.push([])
                airplaneSeats.starboard.premiumClass.push([])

                for (let j = 0; j < premiumRows; j++) {
                    airplaneSeats.port.premiumClass[i].push(0)
                    airplaneSeats.starboard.premiumClass[i].push(0)
                }
            }

            for (let i = 0; i < firstColumns; i++) {
                airplaneSeats.port.firstClass.push([])
                airplaneSeats.starboard.firstClass.push([])

                for (let j = 0; j < firstRows; j++) {
                    airplaneSeats.port.firstClass[i].push(0)
                    airplaneSeats.starboard.firstClass[i].push(0)
                }
            }

            break;

        case 'AirMax-720neo':

            economicColumns = 14
            premiumColumns = 6
            firstColumns = 5

            economicRows = premiumRows = 2
            creakFirstRows = firstRows = 1
            creakPremiumRows = creakEconomicRows = 3

            for (let i = 0; i < economicColumns; i++) {
                airplaneSeats.port.economicClass.push([])
                airplaneSeats.starboard.economicClass.push([])
                airplaneSeats.creak.economicClass.push([])

                for (let j = 0; j < economicRows; j++) {
                    airplaneSeats.port.economicClass[i].push(0)
                    airplaneSeats.starboard.economicClass[i].push(0)
                }

                for (let k = 0; k < creakEconomicRows; k++) {
                    airplaneSeats.creak.economicClass[i].push(0)
                }
            }

            for (let i = 0; i < premiumColumns; i++) {
                airplaneSeats.port.premiumClass.push([])
                airplaneSeats.starboard.premiumClass.push([])
                airplaneSeats.creak.premiumClass.push([])

                for (let j = 0; j < premiumRows; j++) {
                    airplaneSeats.port.premiumClass[i].push(0)
                    airplaneSeats.starboard.premiumClass[i].push(0)
                }

                for (let k = 0; k < creakPremiumRows; k++) {
                    airplaneSeats.creak.premiumClass[i].push(0)
                }
            }

            for (let i = 0; i < firstColumns; i++) {
                airplaneSeats.port.firstClass.push([])
                airplaneSeats.starboard.firstClass.push([])
                airplaneSeats.creak.firstClass.push([])

                for (let j = 0; j < firstRows; j++) {
                    airplaneSeats.port.firstClass[i].push(0)
                    airplaneSeats.starboard.firstClass[i].push(0)
                }

                for (let k = 0; k < creakFirstRows; k++) {
                    airplaneSeats.creak.firstClass[i].push(0)
                }
            }

            break

        // case: Other airplanes
        default:
            break;
    }

    return airplaneSeats
}