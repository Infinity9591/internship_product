const Accounts = require('../models/accounts');

class AccountController {
    index(req, res){
        try {
            Accounts.findAll().then(account => {
                res.json(account)
            })
        } catch (e) {
            return res.status(500).send('error');
        }
    }
}

module.exports = new AccountController();
