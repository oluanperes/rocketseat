const { Router } = require("express");
const multer = require("multer");
const UsersController = require("../controllers/UsersController");
const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:user_id", usersController.update);

module.exports = usersRoutes;