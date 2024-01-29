const sequelize = require('../utility/database');
const myDb = require('../utility/database')
const {DataTypes, Sequelize} = require('sequelize')

const User = myDb.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

User.hasMany(sequelize.define('data'))

module.exports=User;