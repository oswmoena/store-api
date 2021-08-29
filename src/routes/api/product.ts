import {Router} from "express";
import ProductController from "../../controllers/api/ProductController";

const router = Router()
const controller = new ProductController()

router.get('/', controller.getAll)
router.post('/', controller.create)

export default router