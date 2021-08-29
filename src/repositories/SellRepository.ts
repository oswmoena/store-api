import {Sell} from "../entities";

export const getAll = async() => {
    let query = await Sell.createQueryBuilder('pm')
    return query.getMany()
}