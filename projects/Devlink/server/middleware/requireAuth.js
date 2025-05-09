const _supabase = require("../config/supabaseConfig")

// const requireAuth = async (req, res, next) => {    
//     const authHeader = req.headers.authorization.split(" ")[1]

//     if(!authHeader || authHeader.length == 0) {
//         res.status(401).json({error: "Missing token"})
//     }

//     const {data: {user}, error} = await _supabase.auth.getUser(authHeader)

//     if(error || !user) return res.status(401).json({error: "Unauthorized"})

//     req.user = user
//     next()
// }


const requireAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Missing or invalid authorization header" });
    }
  
    const token = authHeader.split(" ")[1];
  
    if (!token || token.length === 0) {
      return res.status(401).json({ error: "Missing token" });
    }
  
    const { data: { user }, error } = await _supabase.auth.getUser(token);
  
    if (error || !user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    req.user = user;
    next();
  };
  

module.exports = requireAuth