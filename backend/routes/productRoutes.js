const express = require("express");

const router = express.Router();

const Product = require("../models/Product");


// CREATE PRODUCT
router.post("/", async (req, res) => {

    try {

        const newProduct = new Product(req.body);

        const savedProduct = await newProduct.save();

        res.json(savedProduct);

    } catch (error) {

        res.status(500).json(error);

    }

});


// GET ALL PRODUCTS
router.get("/", async (req, res) => {

    try {

        const products = await Product.find();

        res.json(products);

    } catch (error) {

        res.status(500).json(error);

    }

});


// DELETE PRODUCT
router.delete("/:id", async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.json({
            message: "Product deleted"
        });

    } catch (error) {

        res.status(500).json(error);

    }

});

module.exports = router;