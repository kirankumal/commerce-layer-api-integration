import { cl } from "../../utils/commerce-layer.js";
import { tryCatchWrapper } from "../../middlewares/index.js";
/**
 * @description Get all categories
 * @route  GET /categories
 */
export const getCategories = tryCatchWrapper(async (req, res) => {
//    const categoriesResponse = await cl.sku_lists.list();
//     const categories = categoriesResponse.map(category => ({
//         id: category.id,
//         name: category.name,
//         slug: category.slug,
//         description: category.description,
//         imageUrl: category.image_url,
//         skuCodeRegex: category.sku_code_regex
//     }));

//     const categoriesWithProducts = await Promise.all(categories.map(async (category) => {
//         const products = await cl.sku_lists.retrieve(category.id)
//         console.log("products", products);
        
//     }));
// console.log(categories);

const products = await cl.skus.list({
    filters: {
    metadata_jcont: {
        'main_category': 'Electronics'
    }

    },
    fields: ["name", "image_url", "description"]
})

console.log(products);


    // Retrieve products for each category
    // const categoriesWithProducts = await Promise.all(categories.map(async (category) => {
    //     const skuListItems = await cl.sku_list_items.list({
    //         filters: {
    //             sku_list_id_eq: category.id
    //         }
    //     });

    //     const skuIds = skuListItems.map(item => item.sku.id);

    //     const products = await cl.skus.list({
    //         filters: {
    //             id_in: skuIds.join(',')
    //         },
    //         fields: {
    //             skus: ['code', 'name', 'description', 'image_url']
    //         }
    //     });

    //     return {
    //         ...category,
    //         products
    //     };
    // }));

    res.json(products);
})


export const createCategories = tryCatchWrapper(async (req, res) => {
    const createSkus = await cl.skus.create({
        name: 'Test',
        code: 'test',
        description: 'Test',
        reference: 'test',
        manage_stock: true,
        price: 100,
        currency_code: 'USD',
        stock_level: 100,
        sku_list_ids: ['sku_list_id']
    })
})
