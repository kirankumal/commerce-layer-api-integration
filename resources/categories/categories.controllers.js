import { tryCatchWrapper } from "../../middlewares/index.js";
import { axiosInstance } from "../../utils/axios.js"
/**
 * @description Get all categories
 * @route  GET /categories
 */
export const getCategories = tryCatchWrapper(async (req, res) => {
    const response = await axiosInstance.get("sku_lists");

    const categories = response.data.data.map((item, index) => ({
        id: item.id,
        name: item.attributes.name,
        slug: item.attributes.slug,
        image: item.attributes.image_url,
    }));

    return res.status(200).json({ success: true, message: "Get all categories", payload: { categories } });
})