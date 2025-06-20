import { Router } from "express";
import { addCategoryController, getCategories } from "../controllers/category.controllers";


const router = Router();


router.get('/', getCategories)
router.post('/', addCategoryController);


export default router;

