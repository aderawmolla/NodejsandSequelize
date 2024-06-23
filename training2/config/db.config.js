const dotenv=require("dotenv").config
const Sequelize = require("sequelize");

console.log(process.env.USER)
const db=process.env.DB
const user=process.env.USER
const password=process.env.PASSWORD
const sequelize = new Sequelize(db,user,password,{
  dialect:"mysql",
  host:"localhost",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}
});

module.exports=sequelize