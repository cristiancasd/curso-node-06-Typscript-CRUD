import { Request, Response, response } from "express";
import User from "../models/user";

export const getUsers=async (req:Request, res:Response)=>{    
    //Regresa una promesa
    const users= await User.findAll();    
    res.json({
        msg:'getUsuarios',
        users
    })
}

export const getUser=async (req:Request, res:Response)=>{
    const{id}=req.params;
    const user=await User.findByPk(id)
    if(user){
        res.json({
            msg:'getUsuarios',
            user
        })
    }else{
        res.status(404).json({
            msg:`No existe usuario con el id ${id}`
        })
    }    
}

export const postUser=async (req:Request, res:Response)=>{
    const {body} =req;

    try{

        const existeEmail=await User.findOne({
            where: {
                email: body.email
            }
        });

        if(existeEmail){
            return res.status(400).json({
                msg:'ya existe usuario con email '+body.email
            })
        }


        const user = User.build(body); 
        await user.save();
        //const user = await User.create(body); //otra forma
       
        res.json({
            msg:'postUser',
            user
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'hable con el administrador'
        })
    }
   
}


export const putUser=async (req:Request, res:Response)=>{
    const{id}   = req.params;
    const{body} = req;
   
    try{

        const user= await User.findByPk(id);
        if(!user){
            return res.status(404).json({
                msg: 'No existe un usuario con el id '+id
            });
        }

        await user.update(body)
        res.json({
            msg:'postUser',
            user
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'hable con el administrador'
        })
    }

}

export const deleteUser=async (req:Request, res:Response)=>{
    const{id}   = req.params;

    const user=await User.findByPk(id)
    if(!user){
       return res.status(404).json({
        msg:'no existe usuario con el id '+id
       })
    }

    //eliminación física
    //await user.destroy();

    await user.update({estado:false});
    

    res.json({
        msg:'deleteUser',
        id
    })
}