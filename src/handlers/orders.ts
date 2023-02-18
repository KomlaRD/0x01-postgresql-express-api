import express from "express";
import { OrderStore } from "../models/order";
import verifyAuthToken  from "../middleware/authenticate";

const store = new OrderStore();

// Show route
const show = async (req: express.Request, res: express.Response) => {
    try {
        const orders = await store.show(req.params.user_id);
        res.json(orders);
} catch (err) {
    throw new Error(`Unable to show order: ${err}`);} 
    }
    

const order_routes = (app: express.Application) => {
    app.get('/orders/:id', verifyAuthToken, show);
}

export default order_routes;