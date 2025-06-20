import { Request, Response } from "express";
import { addCategory, getAllCategories, getCategoryBySlug } from "../services/category.service";
import { generateSlug } from "../shared/general.util";
import z from "zod";


export const getCategories = async (req: Request, res: Response) =>{

    const categories = await getAllCategories();
    console.log('categories', JSON.stringify(categories))
    res.json(categories)
}


export const addCategoryController = async (req: Request, res: Response) => {
    const schema = z.object({
        name: z.string()
    });

    // const schemaValidator = schema.safeParse(req.body);
    // if(!schemaValidator.success){
    //     return res.status(400).json({message: 'Invalid data', errors: schemaValidator.error})
    // }


    const {name} = req.body;
    const userId = 1;
    let slug = generateSlug(name);

    const categoryBySlug = await getCategoryBySlug(slug);

    if(categoryBySlug){
        slug = generateSlug(name, true);
    }

    const category = await addCategory(name, slug, userId);

    res.json(category)

}