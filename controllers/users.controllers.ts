import { Request, response } from "express";

export const getUsers=(req:Request, res=response)=>{
    res.json({
        msg:'getUsuarios'
    })
}


export const getUser=(req:Request, res=response)=>{
    const{id}=req.params;
    res.json({
        msg:'getUsuarios',
        id
    })
}

export const postUser=(req:Request, res=response)=>{
    const{body}=req;
    res.json({
        msg:'postUser',
        body
    })
}


export const putUser=(req:Request, res=response)=>{
    const{id}   = req.params;
    const{body} = req;
    res.json({
        msg:'putUser',
        body,
        id
    })
}

export const deleteUser=(req:Request, res=response)=>{
    const{id}   = req.params;
    res.json({
        msg:'deleteUser',
        id
    })
}