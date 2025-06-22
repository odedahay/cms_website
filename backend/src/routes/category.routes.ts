import { Router } from "express";
import { addCategoryController, deleteCategoryController, getCategories, updateCategoryController,  } from "../controllers/category.controllers";


const router = Router();


router.get('/', getCategories)
router.post('/', addCategoryController);
router.put('/', updateCategoryController);
router.delete('/', deleteCategoryController);
    

export default router;

