import { Router } from "express";
import { ProductsController } from "../controllers/products.js";

const ProductsRouter = () => {
  const router = Router();
  const productsController = ProductsController();

  router.get("/", productsController.getAll);

  return router;
};

export { ProductsRouter };
