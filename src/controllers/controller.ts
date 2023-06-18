import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TempleRoom from '../models/TempleRoom';

function getStatus(req: Request, res: Response, next: any){
    res.json({
        "conexao": "OK"
    });
}

function getTime(req: Request, res: Response, next: any){
    try {
        const clientHour = parseInt(req.params.hour);

        if(!clientHour){
            res.status(StatusCodes.BAD_REQUEST).json({
                "status": 400,
                "error": "O valor informado está em formato incorreto."
            }).end();
        } else if(clientHour > 24){
            res.status(StatusCodes.BAD_REQUEST).json({
                "status": 400,
                "error": "O valor informado está em formato incorreto."
            }).end();
        } else{
            const result = TempleRoom.calcDaysInTemple(clientHour);

            res.status(StatusCodes.OK).json({
                "horas": clientHour,
                "dias na sala do templo": result,
                "anime": "Dragon Ball"
            });
        }

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default { 
    getStatus,
    getTime
}