const User = require('../../models/user');

function signIn(req, res) {
    User.findOne({ id: req.body.id })
        .then((user) => {
            if (user === null) {
                res.status(405).json({
                    'result': 'failure'
                });
            } else if (user.pw === req.body.pw) {
                res.status(200).json({
                    'result': 'success'
                });
            } else {
                res.status(405).json({
                    'result': 'failure'
                });
            }
        })
        .catch((err) => {
            if(err){
                res.status(500).json({
                    'result': 'failure'
                });
            }
        });
}

function signUp(req, res) {
    let newUser = new User();

    newUser.name = req.body.name;
    newUser.id = req.body.id;
    newUser.pw = req.body.pw;
    newUser.type = req.body.type;

    User.findOne({ id: req.body.id })
        .then((user) => {
            if (user === null) {
                newUser.save((err) => {
                    if (err) {
                        res.status(500).json({
                            'result': 'failure'
                        });
                        return;
                    } else {
                        res.status(200).json({
                            'result': 'success'
                        });
                    }
                });
            } else {
                res.status(405).json({
                    'result': 'failure'
                });
            }
        })
        .catch((err) => {
            if(err) {
                console.log(err);
                res.status(500).json({
                    'result': 'failure'
                });
            }
        });
}

exports.signIn = signIn;
exports.signUp = signUp;
