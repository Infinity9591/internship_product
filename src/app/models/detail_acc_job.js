const { DataTypes} = require("sequelize");
const {sequelize} = require('../config/db.config');
const Jobs = require('./jobs');
const Accounts = require('./accounts');
// const slug = require('slug');

const DetailAccJob = sequelize.define(
    'detail_acc_job',
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true
        },
        begin_time :{
            type : DataTypes.DATE,
            allowNull : false
        },
        end_time : {
            type : DataTypes.DATE,
            allowNull : false
        },
        process : {
            type : DataTypes.STRING,
            allowNull : false
        },
        account_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        job_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        // slug : {
        //     type : DataTypes.STRING,
        // }
    }, {
        timestamps : false,
        createdAt : false,
        updatedAt : false,
        freezeTableName: true,
    }
)

DetailAccJob.belongsTo(Jobs, {
    foreignKey : {
        name : 'job_id'
    }
});

DetailAccJob.belongsTo(Accounts, {
    foreignKey : 'account_id'
});

DetailAccJob.removeAttribute('jobId');
DetailAccJob.removeAttribute('accountId');

DetailAccJob.sync({alter : true}).then(() => {
    console.log('DetailAccJob sync successfully');
})

module.exports = DetailAccJob;
