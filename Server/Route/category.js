const express = require("express");
const Router = express.Router();
const multer = require("../middleware/multer");
const categoryController = require("../controllers/categoryControllers");
const productController = require("../controllers/productControllers");

Router.post("/add-category", categoryController.addCategory);
Router.get("/get-category", categoryController.getCategory);
Router.get("/get-product", productController.getProduct);
Router.post("/product", multer.array("file", 2), productController.addProduct);
Router.post("/filter", productController.filterProducts);
Router.post("/search", productController.Search);

module.exports = Router;
