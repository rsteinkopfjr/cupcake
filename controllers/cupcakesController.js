var express = require('express');

var router = express.Router();

var cupcake = require("../models/cupcake.js");

router.get("/", function (req, res) {
    cupcake.selectAll(function(data){
        var hbsObject = {
            cupcakes: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/cupcakes", function(req, res){
    cupcake.create([
        "cupcake_name", "devoured"
    ], [
        req.body.cupcake_name, req.body.devoured
    ], function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/cupcakes/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    cupcake.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changeRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;