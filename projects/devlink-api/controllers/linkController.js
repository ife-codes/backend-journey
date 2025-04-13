const Link = require("../models/linkModel");

const handleErrors = (error) => {
<<<<<<< HEAD
  let errors = { title: "", url: "", category: "", notes: "" };
  if (error.message.includes("link validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
=======
  let errors = { title: "", url: "", category: "", notes: "", user: "" }; 

  // if (error.message.includes("link validation failed")) {
  //   Object.values(error.errors).forEach(({ properties }) => {
  //     errors[properties.path] = properties.message;
  //   });
  // }
>>>>>>> ea1b8a0dfb83d0d79c16e180ba98518066dfea43

  console.log(error);

  return errors;
};

<<<<<<< HEAD
const get_link = async (req, res) => {
  res.send("link delete request");
};

const get_all_links = async (req, res) => {
  try {
    const user = req.userId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { search } = req.query;

    const links = await Link.find({
      user,
      $or: {
        title: { $regex: search, options: "i" },
        description: { $regex: search, options: "i" },
      },
    })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    const total = await Link.countDocuments({
      user,
      $or: {
        title: { $regex: search, options: "i" },
        description: { $regex: search, options: "i" },
      },
    });

    if (!links.length) {
      res.status(200).json({ links: "No links or bookmarks to show" });
    } else {
      res.status(200).json({ page, total, pages: Math.ceil(total / limit), links });
    }
  } catch (error) {
    res.status(500).json({ error: "There was an error fetching your links"})
    console.log(error);
  }
};

const add_links = async (req, res) => {
  const user = req.userId;
  const { title, url, category, notes } = req.body;
  const link = new Link({ title, url, category, notes, user });

  try {
    await link.save();
    res.status(201).json(link);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

const update_link = async (req, res) => {
  res.send("link update request");
};

const delete_link = async (req, res) => {
  res.send("link delete request");
};

module.exports = {
  get_link,
  get_all_links,
  add_links,
  update_link,
  delete_link,
=======
const todos_get = async (req, res) => {
  res.send("todo delete request");
};

const todos_post = async (req, res) => {
  res.send("todo post request");
};

const update_post = async (req, res) => {
  res.send("todo update request");
};

const delete_func = async (req, res) => {
  res.send("todo delete request");
};

module.exports = {
  todos_get,
  todos_post,
  update_post,
  delete_func,
>>>>>>> ea1b8a0dfb83d0d79c16e180ba98518066dfea43
};
