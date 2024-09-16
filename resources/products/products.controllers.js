import { tryCatchWrapper } from "../../middlewares/index.js";

/**
 * @description Get all products
 * @route GET /products
 */
export const getProducts = tryCatchWrapper(async (req, res) => { 
    return res.status(200).json({ message: "Get all products" }); 
})