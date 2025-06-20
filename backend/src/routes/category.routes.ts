import { Router } from "express";
import { addCategoryController, getCategories, updateCategoryController } from "../controllers/category.controllers";


const router = Router();


router.get('/', getCategories)
router.post('/', addCategoryController);
router.put('/', updateCategoryController);


export default router;

