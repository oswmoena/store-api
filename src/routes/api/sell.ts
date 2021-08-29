import {Router} from "express";
import SellController from "../../controllers/api/SellController";

const router = Router();
const controller = new SellController()

router.get('/', controller.getAll)
router.post('/', controller.create)

export default router