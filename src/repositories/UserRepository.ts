import {User} from "../entities";

export const getAll = async() => {
    let query = await User.createQueryBuilder('pm')
    return query.getMany()
}