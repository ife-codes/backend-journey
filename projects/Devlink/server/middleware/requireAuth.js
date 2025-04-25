const _supabase = require("../config/supabaseConfig")

const requireAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization.split(" ")[1]

    if(!authHeader || authHeader.length == 0) {
        res.status(401).json({error: "Missing token"})
    }

    const {data: {user}, error} = await _supabase.auth.getUser(authHeader)

    if(error || !user) return res.status(401).json({error: "Unauthorized"})

    req.user = user
    next()
}

module.exports = requireAuth