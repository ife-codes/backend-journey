const mongoose = require("mongoose");
const validator = require("validator");

const linkSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    url: {
      type: String,
      required: [true, "URL i required"],
<<<<<<< HEAD
      validate: {
        validator: function(value) {
          return validator.isURL(value, {
            protocols: ['http','https'],
            require_protocol: true,  // must have http/https
            require_valid_protocol: true,
            allow_underscores: true
          });
        },
        message: 'Invalid URL format'
      }
=======
      validate: [
        {
          validator: function (value) {
            validator.isURL(value, {
              option: ["http", "https"],
              require_protocol: true,
              require_valid_protocol: true,
              allow_underscores: true,
            })
          },
          message: "Invalid URL format"
        },
      ],
>>>>>>> ea1b8a0dfb83d0d79c16e180ba98518066dfea43
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    notes: {
      type: String,
      default: "",
      trim: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User id must be provided"],
    },
  },
  { timestamps: true }
);

const Link = mongoose.model("link", linkSchema);
module.exports = Link;
