const sequelize = require('../utility/database');
const myDb = require('../utility/database')
const {DataTypes} = require('sequelize');
const User = require('./auth');

const Data = myDb.define('data',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        
    },
    idUser:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    englishText:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    khmerText:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imgPath:{
        type:DataTypes.STRING,
        allowNull:false
    },
    remark:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=Data;