import {NextFunction, Request, Response} from "express";
import {getAll} from "../../repositories/SellRepository";
import {Sell} from "../../entities";

export default class SellController {

    public create = async (req: Request, res: Response, next: NextFunction) => {
        const {total} = req.body
        try {
            let sell = Sell.create({
                total
            })
            await Sell.save(sell)
            res.status(200).send({
                success: true,
                data: sell
            })
        }catch (error) {
            next(error)
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let sell = await getAll()
            res.status(200).send({
                success: true,
                data: sell
            })
        } catch (error) {
            next(error)
        }
    }
}