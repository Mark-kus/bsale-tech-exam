module.exports = (boardingPasses) => {
    const unseatedPassengers = {}

    const passengersReady = boardingPasses.map(bp => {
        const passenger = {
            passengerId: bp.passenger.passenger_id,
            dni: bp.passenger.dni,
            name: bp.passenger.name,
            age: bp.passenger.age,
            country: bp.passenger.country,
            boardingPassId: bp.boarding_pass_id,
            purchaseId: bp.purchase_id,
            seatTypeId: bp.seat_type_id,
            seatId: bp.seat_id
        }

        if (bp.seat_id) {
            return passenger
        } else {
            if (!unseatedPassengers[bp.purchase_id]) {
                unseatedPassengers[bp.purchase_id] = []
            }
            unseatedPassengers[bp.purchase_id].push(passenger)
        }
    })

    return { unseatedPassengers, passengersReady }
}