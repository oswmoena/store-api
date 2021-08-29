import {NextFunction, Request, Response} from "express";
import {getAll} from "../../repositories/PurchaseRepository";
import {Purchase} from "../../entities";

export default class PurchaseController {

    public create = async (req: Request, res: Response, next: NextFunction) => {
        const {price, quantity} = req.body
        try {
            let purchase = Purchase.create({
                price,
                quantity
            })
            await Purchase.save(purchase)
            res.status(200).send({
                success: true,
                data: purchase
            })
        }catch (error) {
            next(error)
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let purchase = await getAll()
            res.status(200).send({
                success: true,
                data: purchase
            })
        } catch (error) {
            next(error)
        }
    }
}