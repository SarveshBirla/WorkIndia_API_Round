import express from "express";
import { createUser } from "../controllers/createuser.js";

const signup = express.Router();

signup.post('/signup',createUser);

export default signup;


