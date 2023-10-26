const { Router } = require("express");
const { verifyToken } = require("../utils/token-manager.js");
const { chatCompletionValidator, validate } = require("../utils/validators.js");
const {
    deleteChats,
    generateChatCompletion,
    sendChatsToUser,
} = require("../controllers/chat-controllers.js");

//Protected API
const chatRoutes = Router();
chatRoutes.post(
    "/new",
    validate(chatCompletionValidator),
    verifyToken,
    generateChatCompletion
);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/delete", verifyToken, deleteChats);

module.exports = chatRoutes;