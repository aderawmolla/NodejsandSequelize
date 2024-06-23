const Sequilize=require("sequelize")
const sequelize=require("../config/db.config")

const User=sequelize.define("ourUser",{
   username:{
    type:Sequilize.STRING,
    allowNull:false,
    unique:true
   },
   email:{
    type:Sequilize.STRING,
    allowNull:false,
    unique:true
   },
  password:{
    type:Sequilize.STRING,
    allowNull:false,
    unique:true
 
  }
})

module.exports=User
