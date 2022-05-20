const { Schema, model } = require("mongoose");

const KindSchema = new Schema({
  kind: {
    type: String,
    required: true,
  },
});

const Kind = model("kind", KindSchema, "kinds");

module.exports = Kind;
