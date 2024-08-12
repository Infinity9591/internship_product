const Positions = require('../models/positions');

class PositionController {
    index(req, res){
        try {
            Positions.findAll().then(position => {
                res.json(position)
            })
        } catch (e) {
            return res.status(500).send('error');
        }
    }
}

module.exports = new PositionController();
