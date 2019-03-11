var orm = require("../config/orm.js");

var cupcake = {
    selectAll: function(cb){
        orm.selectAll("cupcakes", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("cupcakes", cols, vals, function(res) {
            cb(res);
        });
    },
    updatedOne: function(objColVals, condition, cb){
        orm.updateOne("cupcakes", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = cupcake;