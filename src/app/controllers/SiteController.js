const RelationPosPer = require("../models/relation_pos_per");
const Accounts = require('../models/accounts');
const Department = require('../models/departments');
const DetailAccJob = require('../models/detail_acc_job');
const Jobs = require('../models/jobs');
const Permission = require('../models/permissions');
const Positions = require('../models/positions');
const Users = require('../models/users');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const key = process.env.TOKEN_SECRET;

class SiteController {
     async login(req, res){
        if (req.method === "POST"){
            try{
                Accounts.findOne({where : {username : req.body.username}}).then(account => {
                    if (!account) return res.status(422).send('username or Password is not correct');
                    else
                    if (account.password_hash === req.body.password){
                        const token = jwt.sign({id : account.id}, key , {expiresIn : '10s'});
                        res.setHeader('auth-token', token).send(token);
                    }
                    else
                        return res.status(422).send('username or Password is not correct');
                })
            } catch (e) {
                return res.status(500).send('error');
            }
        }
    }

    authorized(req, res){
        res.send('Success');
    }
}

module.exports = new SiteController();
