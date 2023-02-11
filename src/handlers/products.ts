import express from "express";
import { Product, ProductStore } from "../models/product";
import verifyAuthToken from "../middleware/authenticate";

const store = new ProductStore();

// Index route
const index = async (req: express.Request, res: express.Response) => {
    const products = await store.index();
    res.json(products);
};

// Show route
const show = async (req: express.Request, res: express.Response) => {
    const products = await store.show(req.params.products_id);
    res.json(products);
};

// Create route
const create = async (req: express.Request, res: express.Response) => {
    try {
        const products: Product = {
            products_id: parseInt(req.params.id as string),
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        }
        const newProduct = await store.create();
        res.json(newProduct);
    } catch (err) {
        res.status(400);
        res.json(err);
};
}

// Create product route function
const products_route = (app: express.Application) => {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', verifyAuthToken, create);
};

export default products_route;