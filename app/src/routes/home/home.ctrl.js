"use strict";

const User = require("../../model/User");

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
};



const process = {
    login : (req, res) => {

        const user = new User(req.body); //req.body는 클라이언트가 던져준 인자
        const response = user.login();
       
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};