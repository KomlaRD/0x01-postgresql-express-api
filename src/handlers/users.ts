import express, {Application, Request, Response} from "express";
import { User, UserStore } from "../models/user";

const store = new UserStore();

// Index route
const index = async (req: express.Request, res: express.Response) => {
    const users = await store.index();
    res.json(users);
};

// Show route
const show = async (req: express.Request, res: express.Response) => {
    const user = await store.show(req.params.id);
    res.json(user);
};

// Create route
const create = async (req: express.Request, res: express.Response) => {
    try {
        const user: User = {
            user_id: parseInt(req.params.id as string),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password
    }
        const newUser = await store.create(user);
        res.json(newUser);
    } catch (err) {
        res.json(400);
        throw new Error (`The user could not be created: ${err}`);
    }
}

// Create user route function
const user_routes = (app: Application) => {
    app.get('/users', index);
    app.get('/users/:id', show);
    app.post('/users', create);
}

export default user_routes;
