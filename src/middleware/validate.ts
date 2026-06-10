import {Request,Response,NextFunction}from "express";
import { ZodSchema } from "zod";


const validateRequest=(schema:ZodSchema)=>(req:Request,res:Response,next:NextFunction)=>{
try{
    schema.parse(req.body);
    next();
}catch(error:any){
    res.status(400).json({
        message:"Validation failed",
        errors:error.map((err:any)=>err.message)
    });
}
}
export default validateRequest;