import { Application, Router } from 'express'
import PaymentMethod from "./api/paymentMethod";
import Product from "./api/product";
import Purchase from "./api/purchase";
import Sell from "./api/sell";
import User from "./api/user";

type RouteEntry = {
	path: string
	router: Router
}

const routes: RouteEntry[] = [
	// Rutas aqui como objetos { path: "/api", router: PersonRouter }
	{path: '/payment', router: PaymentMethod},
	{path: '/product', router: Product},
	{path: '/purchase', router: Purchase},
	{path: '/sell', router: Sell},
	{path: '/user', router: User},
]

/**
 * This function register all routes defined in this file
 * to an express application.
 * @param app Express application instance
 */
export default function registerRoutes(app: Application): void {
	routes.forEach(({ path, router }) => app.use(path, router))
}
