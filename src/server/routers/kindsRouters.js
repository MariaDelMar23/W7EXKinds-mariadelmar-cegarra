const express = require("express");
const {
  listKinds,
  getKind,
  createKind,
} = require("../controllers/kindsControllers");

const kindsRouter = express.Router();

kindsRouter.get("/list", listKinds);
kindsRouter.get("/kind/:id", getKind);
kindsRouter.post("/new-kind", createKind);

module.exports = kindsRouter;
