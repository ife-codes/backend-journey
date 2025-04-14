const Link = require("../models/linkModel");

const handleErrors = (error) => {
  let errors = { title: "", url: "", category: "", notes: "" };
  if (error.message.includes("link validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  console.log(error);

  return errors;
};

const get_link = async (req, res) => {
  const user = req.userId;
  const id = req.params.id;

  try {
    const link = await Link.findById(id);
    if (link) {
      if (link.user.toString() === user.toString()) {
        res.status(200).json(link);
      } else {
        res
          .status(404)
          .json({ msg: "Oops couldnt find any link with that id" });
      }
    } else {
      res.status(404).json({ msg: "Oops couldnt find any links" });
    }
  } catch (error) {
    res.status(500).json({ error: "There was an unexpected error" });
    console.log(error);
  }
};

const get_all_links = async (req, res) => {
  try {
    const user = req.userId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { search } = req.query;
    
    // Create a common query object to avoid duplication
    const query = {
      user,
      ...(search && {  // Only add $or if search exists
        $or: [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
        ]
      })
    };

    const links = await Link.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    const total = await Link.countDocuments(query);

    if (!links.length) {
      res.status(200).json({ msg: "No links or bookmarks to show" });
    } else {
      res.status(200).json({ 
        page, 
        total, 
        pages: Math.ceil(total / limit), 
        links 
      });
    }
  } catch (error) {
    res.status(500).json({ error: "There was an error fetching your links" });
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
  const user = req.userId;
  const id = req.params.id;
  const { title, url, category, notes } = req.body;

  try {
    const link = await Link.findById(id);
    if (link) {
      if (link.user.toString() === user.toString()) {
        await Link.findByIdAndUpdate(id, { title, url, category, notes });
        res.status(200).json({msg: "Link updated successful"})
      } else {
        res
          .status(404)
          .json({ msg: "Oops couldnt find any link with that id" });
      }
    } else {
      
      res.status(404).json({ msg: "Oops couldnt find any links" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "There was an unexpected error updating link" });
  }
};

const delete_link = async (req, res) => {
  const user = req.userId;
  const id = req.params.id;

  try {
    const link = await Link.findById(id);
    if (link) {
      if (link.user.toString() === user.toString()) {
        await Link.findByIdAndDelete(id);
        res.status(200).json({msg: "Link deleted successful"})
      } else {
        res
          .status(404)
          .json({ msg: "Oops couldnt find any link with that id" });
      }
    } else {
      res.status(404).json({ msg: "Oops couldnt find any links" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an unexpected error updating link" });
  }
};

module.exports = {
  get_link,
  get_all_links,
  add_links,
  update_link,
  delete_link,
};
