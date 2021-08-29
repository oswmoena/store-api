import {Purchase} from "../entities";

export const getAll = async() => {
    let query = await Purchase.createQueryBuilder('pm')
    return query.getMany()
}