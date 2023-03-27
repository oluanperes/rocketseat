const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./movie_notes.routes");
const tagsRouter = require("./movie_tags.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRoutes);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;