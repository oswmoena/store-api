import {NextFunction, Request, Response} from "express";
import {getAll} from "../../repositories/ProductRepository";
import {Product} from "../../entities";

export default class ProductController {

    public create = async (req: Request, res: Response, next: NextFunction) => {

        const {name, price, quantity, description} = req.body

        try {
            let product = Product.create({
                name,
                price,
                quantity,
                description
            })
            await Product.save(product)

            res.status(200).send({
                success: true,
                data: product
            })
        } catch (error) {
            next(error)
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let product = await getAll()
            res.status(200).send({
                success: true,
                data: product
            })
        } catch (error) {
            next(error)
        }
    }
}