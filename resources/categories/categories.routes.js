import express from "express";

import { getCategories } from "./categories.controllers.js";
import {setJwtAuth} from "../../middlewares/index.js"


const router = express.Router();

// router.use(setJwtAuth)

router.route("/").get(getCategories);

export default router;