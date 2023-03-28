const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const user = require('../Model/users.model');

module.exports.reqister = (req,res) => {
    console.log('Registering user');

    user.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password,genSaltSync(10))
    }, (err,user) => {
        if(err) {
            console.log(err)
            res.status(400).json(err);
        } else {
            console.log('User registered successfully',user)
            res.status(2001).json(user)
        }
    })
}
