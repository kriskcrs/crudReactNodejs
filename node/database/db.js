import {Sequelize} from 'sequelize'

const db = new Sequelize('blogs','admin','desarrollo2023',{
host:'database-1.ckd7ayugppue.us-east-1.rds.amazonaws.com',
dialect:'mysql'
})

export default db