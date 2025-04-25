const _supabase = require("../config/supabaseConfig");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await _supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log("Supabase error: ", error);
      return res.status(500).json({ error });
    }

    console.log("Logged user in: ", data.session.access_token);
    res.status(201).json({ access_token: data.session.access_token });
  } catch (error) {
    console.log("Server error", error)
    res.status(500).json({ error });
  }
};

const signup = async (req, res) => {
  try {
    const user_id = req.user.id
    const { email, password } = req.body;
    const { data: {user}, error } = await _supabase.auth.signUp({
      email,
      password,
      user_id
    });

    if (error) {
      console.log("Supabase error: ", error);
      return res.status(500).json({ error });
    }

    console.log("New user: ", user);
    res.status(201).json({ user });
  } catch (error) {
    console.log("Server error", error)
    res.status(500).json({ error });
  }
};

module.exports = {
  login,
  signup,
};
