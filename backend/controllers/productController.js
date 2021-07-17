import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

/**
 * @description Fetch all products
 * @route GET /api/products
 * @access Public
 */
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}); // empty obj returns all
    res.json(products);
});

/**
 * @description Fetch a single products
 * @route GET /api/products/:id
 * @access Public
 */
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
});

export { getProducts, getProductById };
