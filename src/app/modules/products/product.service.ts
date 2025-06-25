
import QueryBuilder from "../../builder/QueryBuilder";
import { IProduct } from "./product.interface";
import Product from "./product.model";

async function createProduct(payload: IProduct) {
  const product =await Product.create(payload);
  return product;
}

async function getProducts(query:Record<string,unknown>) {
  const productQuery = new QueryBuilder(Product.find(),query)
  .search(["name","category"])
  .filter()
  .sort()
  .paginate()
  .fields()
const result = await productQuery.modelQuery;
const meta = await productQuery.countTotal();
return {meta,result}
}



export const productService = {
  createProduct,
  getProducts
 
};
