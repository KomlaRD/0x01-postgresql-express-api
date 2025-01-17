import express, {Application, Request, Response} from "express";
import { User, UserStore } from "../models/user";
import jwt from "jsonwebtoken";
import verifyAuthToken from "../middleware/authenticate";

const store = new UserStore();

// Index route
const index = async (req: express.Request, res: express.Response) => {
    try {
        const users = await store.index();
        res.json(users);
    } catch (err) {
        throw new Error(`Unable to retrieve users: ${err}`);
};
}

// Show route
const show = async (req: express.Request, res: express.Response) => {
    try {
        const user = await store.show(req.params.id);
        res.json(user);
    } catch (err) {
        throw new Error(`Unable to show user: ${err}`);
    }  
};

// Create route
const create = async (req: express.Request, res: express.Response) => {

        const user: User = {
            user_id: parseInt(req.params.id as string),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password
    }
    try {
        const newUser = await store.create(user);
        var token = jwt.sign( { user: newUser}, process.env.TOKEN_SECRET!)
        res.json(token);
    } catch (err) {
        res.json(400);
        throw new Error (`The user could not be created: ${err}`);
    }
}

// Create user route function
const user_routes = (app: Application) => {
    app.get('/users', verifyAuthToken, index);
    app.get('/users/:id', verifyAuthToken, show);
    app.post('/users', create);
}

export default user_routes;
