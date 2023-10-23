import allMiddlewares from "../middlewares/template";
import { test } from "../controllers/test.controller";
import express from "express";

export const testRouter = express.Router();

testRouter.get('/', allMiddlewares.middleware, test);
