import { Request, Response, NextFunction } from "express";


const middleware = async (req: Request, res: Response, next: NextFunction) => {
  console.log('middleware hecho');
  next();
}

const allMiddlewares = {
  middleware,
};
  
export default allMiddlewares;