import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import products_route from './handlers/products'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Welcome to my store backend')
})

products_route(app);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
