'use strict';

var express = require('express');
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function(req, res) {
    Todo.find({}, function(err, todos) {
        if(err) {
            // do something
            return res.status(500).json({message: err.message});
        } else {
            res.json({todos:todos});
        }
    });
});

//TODO: Add POST route to create new entries

//TODO: Add PUT route to update existing entries

//TODO: ADD DELETE route to delete entries

module.exports = router;