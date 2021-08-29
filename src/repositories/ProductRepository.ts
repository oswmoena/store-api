import {Product} from "../entities";

export const getAll = async() => {
    let query = await Product.createQueryBuilder('pm')
    return query.getMany()
}