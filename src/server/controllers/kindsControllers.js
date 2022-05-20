const debug = require("debug")("kinds:server:controllers");
const Kind = require("../../database/models/Kind");

const listKinds = async (req, res, next) => {
  try {
    const kinds = await Kind.find({});

    res.status(200).json({ kinds });
  } catch (error) {
    error.statusCode = 404;
    error.customMessage = "Could not get any kinds";

    next(error);
  }
};

const getKind = async (req, res, next) => {
  const { id } = req.params;
  try {
    const kind = await Kind.findById(id);

    res.status(200).json({ kind });
  } catch (error) {
    error.status = 404;
    error.customMessage = `Could not get kind with id: ${id}`;

    next(error);
  }
};

const createKind = async (req, res, next) => {
  const kind = req.body;
  debug(req.body);
  debug(kind);
  try {
    const newKind = await Kind.create(kind);

    res.status(201).json({ newKind });
  } catch (error) {
    debug();

    error.statusCode = 409;
    error.customMessage = "Couldn't create kind";

    next(error);
  }
};

module.exports = { listKinds, getKind, createKind };
