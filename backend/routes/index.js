const { Router } = require("express");
const userRoutes = require("./user-routes.js");
const chatRoutes = require("./chat-routes.js");

const appRouter = Router();

appRouter.use("/user", userRoutes); //domain/api/v1/user
appRouter.use("/chat", chatRoutes); //domain/api/v1/chats

module.exports = appRouter;