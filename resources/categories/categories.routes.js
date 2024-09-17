import express from "express";

import { getCategories, createCategories } from "./categories.controllers.js";


const router = express.Router();


router.route("/").get(getCategories).post(createCategories);

export default router;