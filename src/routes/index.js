import express from "express";
import { router as userRoute } from "../modules/users/users.route.js";
import { router as transfersRoute } from "../modules/transfers/transfers.route.js";

export const router = express.Router();

router.use("/users", userRoute);
router.use("/transfers", transfersRoute);
