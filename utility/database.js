const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_stu', 'db_stu_user', 'smRUyDJJSYnL55WyqDxgdw4Y6FgLabNU', {
    host: 'dpg-cmrlmqf109ks73fimnpg-a',
    dialect: 'postgres',
});

module.exports = sequelize;


