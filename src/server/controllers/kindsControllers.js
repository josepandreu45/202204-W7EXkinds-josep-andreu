require("dotenv").config();
const Kind = require("../../database/models/Kind");

const listKinds = async (req, res, next) => {
  const kinds = await Kind.find();

  if (kinds) {
    res.status(200).json({ msg: kinds });
  } else {
    const err = new Error();
    err.message = "bad request";
    err.code = 409;

    next(err);
  }
};

module.exports = listKinds;
