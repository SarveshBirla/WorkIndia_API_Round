import express from "express";
import { createUser } from "../controllers/createuser.js";
import { loginUser } from "../controllers/loginuser.js";

const signup = express.Router();

signup.post('/signup',createUser);
signup.post('/login',loginUser);
export default signup;


