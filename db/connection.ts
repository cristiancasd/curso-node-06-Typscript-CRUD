import { Sequelize } from "sequelize";

//nombre de la base de datos, usuario y contraseña
const db = new Sequelize('node', 'root','',{
    host: 'localhost',
    dialect:'mysql'
})

export default db;