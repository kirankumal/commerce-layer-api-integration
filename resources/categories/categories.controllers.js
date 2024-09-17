import { cl } from "../../utils/commerce-layer.js";
import { tryCatchWrapper } from "../../middlewares/index.js";
/**
 * @description Get all categories
 * @route  GET /categories
 */

export const getCategories = tryCatchWrapper(async (req, res) => {
      const skus = await cl.skus.list({
        fields: {
          skus: ['code', 'name']
        },
      })

     const skulist = await cl.sku_lists.list()
     console.log("skulist",skulist);

    const skulistitem = await cl.sku_list_items.list()
     console.log("skulisitem",skulistitem);
     
    return res.status(200).json({ success: true, message: "Get all categories", payload: { categories: skus } });
})