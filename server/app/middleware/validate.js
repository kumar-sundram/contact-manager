const validator = require('validator')

function validateID(req, res, next) {
    console.log(req.params)
    if (validator.isMongoId(req.params.id)) {
        next()
    } else {
        res.send({
            notice: 'invalid object id'
        })
    }
}

module.exports = {
    validateID
}