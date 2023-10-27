import { Request, Response } from "express";
import { CarsServices } from "../services/cars.services";

interface ICarsControllers{
    create(req: Request, res: Response): Response;
    //getMany(req: Request, res: Response): Response
    //getOne(req: Request, res: Response): Response
    //delete(req: Request, res: Response): Response
    //update(req: Request, res: Response): Response
}

export class CarsControllers implements ICarsControllers{
    create(req: Request, res: Response): Response{
        const carsServices = new CarsServices();

        const create = carsServices.create(req.body);

        return res.status(200).json(create);
    }

    /*
    getMany(req: Request, res: Response): Response{

    }

    getOne(req: Request, res: Response): Response{

    }

    delete(req: Request, res: Response): Response{

    }

    update(req: Request, res: Response): Response{

    }
    */
}