const {createClient} = require("@supabase/supabase-js")


const _supabase = createClient(
    process.env.API_URL,
    process.env.ANON_KEY    
)

module.exports = _supabase
