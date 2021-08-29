import {NextFunction, Request, Response} from "express";
import {PaymentMethod} from "../../entities";
import {getAll} from "../../repositories/PaymentMethodRepository";

export default class PaymentMethodController {
    public create = async (req: Request, res: Response, next: NextFunction) => {
        let {body} = req
        let {method} = body

        try {
            let paymentMethod = PaymentMethod.create({
                method
            })
            await PaymentMethod.save(paymentMethod)

            res.status(200).send({
                success: true,
                data: paymentMethod,
            })
        } catch (error) {
            next(error)
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let paymentMethod = await getAll()
            res.status(200).send({
                success: true,
                data: paymentMethod
            })
        } catch (error) {
            next(error)
        }

    }
}