import express,{Application} from 'express';
import userRoutes from '../routes/users.routes';
import cors from 'cors';
import db from '../db/connection';


class Server{

    private app:Application;
    private port:string;
    
    //definir las rutas que mi app va a tener
    private apiPaths={
        users: '/api/users'
    }

    constructor(){
        this.app  = express();
        this.port = process.env.PORT|| '8000'
        this.dbConnection();
        this.middlewares();
        this.routes();

    }

    async dbConnection(){
        try{
            await db.authenticate();
            console.log('DatabaseOnline')
        }catch(error){
            throw new Error('error:'+ error )
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors());
    
        //Lectura del body
        this.app.use(express.json());

        //carpeta publica
        this.app.use(express.static('public'))
    }


    routes(){
        this.app.use(this.apiPaths.users, userRoutes)
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor correindo en puerto ' + this.port)
        })
    }
}

export default Server;