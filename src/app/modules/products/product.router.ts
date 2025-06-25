import { Router } from "express";
import { productController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createProductZodSchema } from "./product.validation";


const productRouter = Router();

productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(validateRequest(createProductZodSchema), productController.createProduct);

export default productRouter;
