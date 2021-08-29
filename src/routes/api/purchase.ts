import {Router} from "express";
import PurchaseController from "../../controllers/api/PurchaseController";

const router = Router()
const controller = new PurchaseController()

router.get('/', controller.getAll)
router.post('/', controller.create)

export default router