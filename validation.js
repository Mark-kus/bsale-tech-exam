module.exports = (req, res, next) => {
    const { id } = req.params
    if (Number(id)) return next()
    else return res.status(400).json({ code: 400, error: "Should pass a valid flight id" })
}