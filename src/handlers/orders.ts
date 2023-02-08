import express from "express";
import { OrderStore } from "../models/order";

const store = new OrderStore();

// Show route
const show = async (req: express.Request, res: express.Response) => {
    const orders = await store.show(req.params.user_id);
    res.json(orders);
};

const order_routes = (app: express.Application) => {
    app.get('/orders/:id', show);
}

export default order_routes;