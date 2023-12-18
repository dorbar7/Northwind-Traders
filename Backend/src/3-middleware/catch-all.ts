import { NextFunction, Request, Response } from "express";
import appConfig from "../2-utils/app-config";
import logger from "../2-utils/logger";

function catchAll(err: any, request: Request, response: Response, next: NextFunction) {

    console.log(err);

    const status = err.status || 500;


    if(status===500){
        logger.logError("catchAll error",err)
    }

   const message = appConfig.isDevelopment ? err.massage : "Some error occoured, please try again."


    response.status(status).send(status.message);
}

export default catchAll;
