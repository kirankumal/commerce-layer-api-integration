import express from "express";
import {setJwtAuth} from "../../middlewares/index.js"
import { getProducts } from "./products.controllers.js";

const router = express.Router();

router.use(setJwtAuth)

router.route("/").get(getProducts);

export default router;