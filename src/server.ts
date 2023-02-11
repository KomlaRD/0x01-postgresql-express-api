import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import products_route from './handlers/products'
import user_routes from './handlers/users'
import order_routes from './handlers/orders'
import swagger_ui from "swagger-ui-express";
import YAML from 'yamljs'
import cors from "cors";

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

// Declare api document variable
const doc = YAML.load('src/api_docs.yml');

app.use(bodyParser.json())

// Add cors 
app.use(cors());

// Use the api document 
app.use("/api-docs", swagger_ui.serve, swagger_ui.setup(doc));

app.get('/', function (req: Request, res: Response) {
    res.send('Welcome to my store backend')
})

// Product routes
products_route(app);

// User routes
user_routes(app);

// Order routes
order_routes(app);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
