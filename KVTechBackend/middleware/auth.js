const jwt = require('jsonwebtoken')
const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403)
            .json({ message : "bhai tum unauthorized hao, JWT token chahiye hoga"})
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch(err){
        return res.status(403)
            .json({message: 'Bhai tum unauthorized ho tumhara JWT token wrong h ya fir expired ho gaya hai'})
    }
}

module.exports = ensureAuthenticated