import {NextFunction, Request, Response} from "express";
import {getAll} from "../../repositories/UserRepository";
import {User} from "../../entities";

export default class UserController {

    public create = async (req: Request, res: Response, next: NextFunction) => {
        const {email, firstName, lastName, document} = req.body
        try {
            let user = User.create({
                email,
                firstName,
                lastName,
                document
            })
            await User.save(user)

            res.status(200).send({
                success: true,
                data: user
            })

        }catch (error){
            next(error)
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let user = await getAll()
            res.status(200).send({
                success: true,
                data: user
            })
        } catch (error) {
            next(error)
        }
    }
}