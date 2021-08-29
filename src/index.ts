import 'reflect-metadata'
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'
import express from 'express'
import { json, urlencoded } from 'body-parser'
import config from './ormconfig'
import registerRoutes from './routes'
import {getAll} from "./repositories/PaymentMethodRepository";
import {PaymentMethod} from "./entities";

dotenv.config()

createConnection(config())
	.then(async connection => {
		console.log('Connected to Mysql')

		// create express app
		const app = express()

		//Register Middleware
		app.use(json(), urlencoded({ extended: true }))

		// Register routes
		registerRoutes(app)

		// Start app
		app.listen(3000, () => console.log('Express server has started on http://localhost:3000/'))

		app.get('/', function(req, res) {
			res.send('hello world');
		});
	})
	.catch(error => console.error('Error Connecting to Mysql', error))
