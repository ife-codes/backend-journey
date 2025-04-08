const User = require("../models/authModel")
const jwt = require("jsonwebtoken")

const requestAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if(token) {
        jwt.verify(token, "net ninja soup", (error, decodedToken) => {
            if(error) {
                console.log(error.message);
                res.redirect("/auth/login")
            } else {
                next()
            }
        })
    } else {
        res.redirect("/auth/login")
    }
}

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt

    if(token) {
        jwt.verify(token, "net ninja soup", async (error, decodedToken) => {
            if(error) {
                console.log(error.message);
                res.locals.user = null
                next()
            } else {
                const user = await User.findById(decodedToken.id)
                res.locals.user = user
                next()
            }
        })
    } else {
        res.locals.user = null
        next()
    }
}

module.exports = { requestAuth, checkUser }