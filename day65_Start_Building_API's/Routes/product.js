import express from "express";
import { addProduct, getAllProducts, home,getProductById, updateById } from "../Controllers/product.js";

const router = express.Router();

// add product
// @method - post
// @route - /api/product/add
router.post("/add", addProduct);

// get all products
// @method - get
// @route - /api/product/get
router.get("/get", getAllProducts); 

// get product by Id
// @method - get
// @route - /api/product/:id
router.get("/:id",getProductById);

// update product by Id
// @method - put
// @route - /api/product/:id
router.put("/:id",updateById);


// home
// @method - get
// @route - /api/product/home
router.get('/home',home)



export default router;
