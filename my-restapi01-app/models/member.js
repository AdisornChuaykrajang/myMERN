const mongoose = require("mongoose");

const memberSchema = mongoose.Schema(
  {
    firstname: {
      require: true,
      type: String,
    },
    lastname: {
      require: true,
      type: String,
    },
    age: {
      require: true,
      type: Number,
    },
    isActive: {
      require: true,
      type: Boolean,
    },
  },
  {
    collection: "member",
    timestamps: true,
    versionKeys: false,
  }
);

module.exports = mongoose.model("Member", memberSchema);