import express from "express";

import { getCategories } from "./categories.controllers.js";


const router = express.Router();


router.route("/").get(getCategories);

export default router;