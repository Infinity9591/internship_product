const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('business', 'amen', '123456', {
    host : 'localhost',
    port : '1433',
    dialect : 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
})

sequelize.authenticate().then(async () => {
    try{
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
})



module.exports = {sequelize};
