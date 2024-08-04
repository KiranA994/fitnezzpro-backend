const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next) => {
    console.log('inside jwt middleware');
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);
    try {
        const jwtRespone = jwt.verify(token,'supersecretkey')
        console.log(jwtRespone);
        next()
    } catch (error) {
        res.status(401).json(`Authorization failed due to ${error}`)
    }
}

module.exports = jwtMiddleware