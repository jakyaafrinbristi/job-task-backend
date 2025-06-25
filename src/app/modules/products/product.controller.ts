import { Request, Response } from "express";
import httpStatus from "http-status";

import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productService } from "./product.service";

export const createProduct = catchAsync(async (req: Request, res: Response) => {
  const productData = req.body;
  const newProduct = await productService.createProduct(productData);
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Product created successfully',
    data:newProduct,
  });
});

export const getAllProducts = catchAsync(
  async (req: Request, res: Response) => {
    const query = req.query;
    const result = await productService.getProducts(query);
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Product retrieved successfully',
      meta:result.meta,
      data:result.result,
    });
  }
);



export const productController = {
  createProduct,
  getAllProducts,
 
};
