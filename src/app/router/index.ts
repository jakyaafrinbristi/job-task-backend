import { Router } from 'express';
import productRouter from '../modules/products/product.router';



const router = Router();

const moduleRoutes = [
 
  {
    path: '/product',
    route:productRouter,
  },
  
  
  


];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
