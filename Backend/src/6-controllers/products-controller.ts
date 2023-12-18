import express, { Request, Response, NextFunction } from "express";
import blockNonLoggedIn from "../3-middleware/block-non-logged-in";
import productsLogic from "../5-logic/products-logic";

const router = express.Router();

router.get("/products", [blockNonLoggedIn], async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await productsLogic.getAllProducts();
        response.json(products);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;