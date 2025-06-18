import { Router } from "express";
import { getCategories } from "../controllers/category.controllers";


const router = Router();


router.get('/', getCategories)
//router.post('/', addCategory);


export default router;

