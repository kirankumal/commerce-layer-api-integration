import express from "express";
import { getProducts } from "./products.controllers.js";

const router = express.Router();

router.route("/").get(getProducts);

export default router;