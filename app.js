import express from 'express';
import 'dotenv/config';

import {notFound, handleError} from "./middlewares/index.js"
import productsRoute from "./resources/products/products.routes.js" 
import categoriesRoute from "./resources/categories/categories.routes.js"


const app = express();
const port = process.env.PORT || 3000;

// middleware 
app.use(express.json());

// api routes
app.use("/products", productsRoute)
app.use("/categories", categoriesRoute)

app.use(notFound);
app.use(handleError);

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
})