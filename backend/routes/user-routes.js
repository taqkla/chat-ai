const { Router } = require("express");
const {
    getAllUsers,
    userLogin,
    userLogout,
    userSignup,
    verifyUser,
} = require("../controllers/user-controllers.js");
const {
    loginValidator,
    signupValidator,
    validate,
} = require("../utils/validators.js");
const { verifyToken } = require("../utils/token-manager.js");

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);

module.exports = userRoutes;