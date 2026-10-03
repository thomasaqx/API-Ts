import { request, Request, response, Response } from "express";

let listaPets = [];

export default class{
    criaPet(req: Request, res: Response ){
        //recebe o body da requisição.
        const novoPet = req.body;
        //adiciona o body preenchido na lista local. 
        listaPets.push(novoPet)
        //retorna o status de Ok e um Json do pet para uasm variável. 
        return res.status(201).json(novoPet)
    }
}