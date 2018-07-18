const express = require('express');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('index.twig', {user: "Yurii"});
    });

    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.use('/api', require('./api'));

    app.use( (err, req, res, next) => {
        console.error("SOME ERR", err);
        res.status(400).send({message: err && err.message ? err.message : err});
    });

};