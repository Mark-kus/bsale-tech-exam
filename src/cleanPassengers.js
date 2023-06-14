module.exports = cleanPassengers = (boarding_passes) => {
    return boarding_passes.map(bp => {
        if (!bp.seat_id)
        return {
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
    })

}