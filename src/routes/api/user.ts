import {Router} from "express";
import UserController from "../../controllers/api/UserController";

const router = Router()
const controller = new UserController()

router.get('/', controller.getAll)
router.post('/', controller.create)

export default router