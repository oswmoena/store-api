import { Router } from "express";
import PaymentMethodController from "../../controllers/api/PaymentMethodController";

const router = Router()
const controller = new PaymentMethodController()

router.get('/', controller.getAll)
router.post('/', controller.create)

export default router