
import { Request, Response } from "express";

export const test = (req: Request, res: Response) => {
    res.send('Se realizo peticion');
    console.log('jala todo');
}
