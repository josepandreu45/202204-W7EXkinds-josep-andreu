const express = require("express");

const kindsRouter = express.Router();

const listKind = require("../controllers/kindsControllers");

kindsRouter.get("/list", listKind);

module.exports = kindsRouter;
