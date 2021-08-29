import {PaymentMethod} from "../entities";

export const getAll = async() => {
    let query = await PaymentMethod.createQueryBuilder('pm')
    return query.getMany()
}

export const getAllWithSell = async() => {
    let query = await PaymentMethod.createQueryBuilder('pm')
        .leftJoinAndSelect('pm.sell', 's')
}