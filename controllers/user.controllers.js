const createUser = (req, res, next) => {
    try {
        throw "error"
    } catch (err) {
        next({ statusCode: 400, message: "database error" })
    }
}

module.exports = {
    createUser
}