const { Schema, model } = require("mongoose");

const KindSchema = new Schema({
  kind: {
    type: String,
    required: true,
  },
});

const Kind = model("Kind", KindSchema, "kinds");

module.exports = Kind;
