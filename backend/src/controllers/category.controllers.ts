import { Request, Response } from "express";
import { getAllCategories } from "../services/category.service";


export const getCategories = async (req: Request, res: Response) => {

    const categories = getAllCategories();

    res.json(categories);

}