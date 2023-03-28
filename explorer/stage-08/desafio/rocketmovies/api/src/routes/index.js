const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./movie_notes.routes");
const tagsRouter = require("./movie_tags.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/movie_notes", notesRouter);
routes.use("/movie_tags", tagsRouter);

module.exports = routes;