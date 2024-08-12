const Users = require('../models/users');

class UserController {
    index(req, res){
        try {
            Users.findAll().then(user => {
                res.json(user)
            })
        } catch (e) {
            return res.status(500).send('error');
        }
    }

    // create(req, res){
    //     try {
    //         Departments.create({id : req.body.id, name : req.body.name});
    //         res.json({statusCreate : 'Success'});
    //     } catch (e) {
    //         return res.status(500).send('error');
    //     }
    // }
    //
    // delete(req, res){
    //     try {
    //         // console.log(req.body)
    //         Accounts.destroy({
    //             where : {
    //                 department_id : req.body.id
    //             }
    //         }).then(() => {
    //             Departments.destroy({
    //                 where : {
    //                     id : req.body.id
    //                 }
    //             }).then(() => {
    //                 res.json({statusDelete : 'Success'});
    //             })
    //         })
    //     } catch (e) {
    //         return res.status(500).send('error');
    //     }
    // }
    //
    // update(req, res){
    //     try {
    //         Departments.findByPk(req.body.id).then((department) => {
    //             department.id = req.body.data.id;
    //             department.name = req.body.data.name;
    //             department.save();
    //         }).then(() => res.json({statusUpdate : 'Success'}));
    //     } catch (e) {
    //         return res.status(500).send('error');
    //     }
    // }

}

module.exports = new UserController();
