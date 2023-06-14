const fetchFlightData = require('./fetchFlightData.js');
const cleanResponse = require('./cleanResponse.js');
const cleanPassengers = require('./cleanPassengers.js');

module.exports = async (req, res) => {
    const { id } = req.params

    try {
        // Seach data from db
        const data = await fetchFlightData(id)

        // If there is an error code, end request with it
        // or else if there is no data (no flight with this id), end request
        if (data?.code === 400) res.status(400).json(data.errors)
        if (!data) return res.status(404).json({ code: 404, data: {} })

        // Removes useless data and gives a seat to "unseated" passengers
        const passengers = cleanPassengers(data.boarding_passes, data.airplane)
        const response = cleanResponse(data, passengers)

        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error })
    }
}