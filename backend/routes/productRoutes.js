import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// Get products
router.route("/").get(getProducts);
// Get product by id
router.route("/:id").get(getProductById);

export default router;
